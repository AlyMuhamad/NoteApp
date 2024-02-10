import User from '../models/userModel';
import { Request, Response, NextFunction } from 'express';
import { promisify } from 'util';
import jwt from 'jsonwebtoken';
import catchAsync from '../Utils/catchAsync';
import AppError from '../Utils/appError';
import sendEmail from '../Utils/email';
import crypto from 'crypto';

interface UserRequest extends Request {
  user: any;
}

const signToken = (id: any) => {
  return jwt.sign({ id }, process.env.JWT_SECRET as string, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user: any, statusCode: number, res: Response) => {
  const token = signToken(user._id);

  const cookieOptions = {
    expires: new Date(
      Date.now() +
        24 *
          60 *
          60 *
          1000 *
          parseInt(process.env.JWT_COOKIE_EXPIRES_IN as string),
    ),
    httpOnly: true,
    secure: false,
  };

  if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

  res.cookie('jwt', token, cookieOptions);
  user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};

export const signup = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    });

    createSendToken(newUser, 201, res);
  },
);

export const login = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    if (!email || !password)
      return next(new AppError('Please provide an email and password!', 400));

    const user: any = await User.findOne({ email }).select('+password');

    if (!user || !(await user.correctPassword(password, user.password))) {
      return next(new AppError('Incorrect email or password', 401));
    }

    user.loggedIn = true;

    createSendToken(user, 200, res);
  },
);

export const protect = catchAsync(
  async (req: UserRequest, res: Response, next: NextFunction) => {
    let token;
    const secret = process.env.JWT_SECRET;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies.jwt) {
      token = req.cookies.jwt;
    }

    if (!token) {
      return next(
        new AppError(
          'You are not logged in, Please log in to get access!',
          401,
        ),
      );
    }

    const decoded = await promisify(jwt.verify as any)(token, secret);

    const currentUser: any = await User.findById(decoded.id);
    if (!currentUser) {
      return next(
        new AppError(
          `user belonging to this token doesn't no longer exist`,
          401,
        ),
      );
    }

    if (currentUser.changedPasswordAfter(decoded.iat)) {
      return next(
        new AppError(
          'User recently changed password. Please login again!',
          401,
        ),
      );
    }

    req.user = currentUser;
    createSendToken(currentUser, 200, res);
    next();
  },
);

/////////////////////////////////////////////////////////////////////////
export const isLoggedIn = catchAsync(
  async (req: UserRequest, res: Response, next: NextFunction) => {
    if (req.cookies.jwt) {
      const decoded: any = (token: string, secret: string) => {
        return new Promise((resolve, reject) => {
          jwt.verify(
            req.cookies.jwt,
            process.env.JWT_SECRET as string,
            {},
            (err, payload) => {
              if (err) {
                reject(err);
              } else {
                resolve(payload);
              }
            },
          );
        });
      };

      const currentUser: any = await User.findById(decoded.id);
      if (!currentUser) {
        return next();
      }

      if (currentUser.changedPasswordAfter(decoded.iat)) {
        return next();
      }
      req.user = currentUser;
      // req.locals.user = currentUser;
      next();
    }
    next();
  },
);

////////////////////////////////////////////////////////////////////////////////

export const restrictTo = (...roles: any) => {
  return (req: UserRequest, res: Response, next: NextFunction) => {
    if (!roles.includes(req.user.role)) {
      return new AppError(
        `You don't have permission to perform this action`,
        403,
      );
    }
    next();
  };
};

// RESET PASSWORD
export const forgetPassword = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    // 1. get user based on posted email
    const user: any = await User.findOne({ email: req.body.email });
    if (!user) {
      return new AppError(`There is no user with that email address`, 404);
    }

    // 2. generate the random token
    const resetToken = user.createPasswordResetToken();

    await user.save({ validateBeforeSave: false });
    // 3. send it back as an email
    const resetURL = `${req.protocol}://${req.get('host')}/api/v1/resetPassword/${resetToken}`;

    const message = `Forgot your password? Submit a PATCH request with your new password ans passwordConfirm through ${resetURL}\n If you didn't forget your password, please ignore this email`;

    try {
      await sendEmail({
        email: user.email,
        subject: 'Your password reset token (valid for 10 min)',
        message,
      });
      res.send(200).json({
        status: 'success',
        message: 'Token sent to email',
      });
    } catch (err) {
      user.passwordResetToken = undefined;
      user.passwordResetExpires = undefined;
      await user.save({ validateBeforeSave: false });

      return new AppError(
        `There was an error sending the email, try again later!`,
        500,
      );
    }
  },
);

export const resetPassword = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const hashedToken = crypto
      .createHash('sha256')
      .update(req.params.token)
      .digest('hex');

    const user = await User.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: Date.now() },
    });

    if (!user) {
      return next(new AppError('Token is invalid or has expired', 400));
    }

    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;

    await user.save();
    createSendToken(user, 200, res);
  },
);

export const updatePassword = catchAsync(
  async (req: UserRequest, res: Response, next: NextFunction) => {
    const user: any = await User.findById(req.user.id).select('+password');

    if (
      !(await user.correctPassword(req.body.currentPassword, user.password))
    ) {
      return next(new AppError('Your current password is wrong', 401));
    }

    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;
    await user.save();

    createSendToken(user, 200, res);
  },
);

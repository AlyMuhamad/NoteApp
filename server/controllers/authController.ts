import User from '../models/userModel';
import { Request, Response, NextFunction } from 'express';
import { promisify } from 'util';
import jwt, { Secret } from 'jsonwebtoken';
import catchAsync from '../Utils/catchAsync';
import AppError from '../Utils/appError';

const secret = process.env.JWT_SECRET;

const signToken = (id: any) => {
  jwt.sign({ id }, secret as string, {
    expiresIn: process.env.JWT_EXPIRES_IN,
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

    const token = signToken(newUser._id);
    res.status(201).json({
      status: 'success',
      token,
      data: {
        user: newUser,
      },
    });
  },
);

export const login = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    if (!email || !password)
      return next(new AppError('Please provide an email and password!', 400));

    const user: any = await User.findOne({ email: email }).select('+password');

    if (!user || !(await user.correctPassword(password, user.password))) {
      return new AppError('Incorrect email or password', 401);
    }

    const token = signToken(user._id);
    res.status(200).json({
      status: 'success',
      token,
    });
  },
);

export const protect = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return next(
        new AppError(
          'You are not logged in, Please log in to get access!',
          401,
        ),
      );
    }

    // const decoded: any = await promisify(jwt.verify)(token, secret);

    const decoded: any = (token: string, secret: string) => {
      return new Promise((resolve, reject) => {
        jwt.verify(token, secret, {}, (err, payload) => {
          if (err) {
            reject(err);
          } else {
            resolve(payload);
          }
        });
      });
    };

    const currentUser: any = await User.findById(decoded.id);
    if (!currentUser) {
      return next(
        new AppError(
          `the user belongign to this token doesn't no longer exist`,
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
    // req.user = currentUser;
    next();
  },
);

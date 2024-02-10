import AppError from '../Utils/appError';
import catchAsync from '../Utils/catchAsync';
import User from '../models/userModel';
import { Request, Response, NextFunction } from 'express';

interface UserRequest extends Request {
  user: any;
}

const filterObj = (obj: any, ...allowedFields: any) => {
  const newObj: any = {};
  Object.keys(obj).forEach(el => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

// for the user to update its own data
export const updateMe = catchAsync(
  async (req: UserRequest, res: Response, next: NextFunction) => {
    // 1. create error if user posts password data
    if (req.body.password || req.body.passwordConfirm) {
      return next(
        new AppError(
          'This route is not for password updates, Please use update my password',
          400,
        ),
      );
    }

    // 2. filtered out unwanted filed names that aren't allowed to be updated
    const filteredBody = filterObj(req.body, 'name', 'email');

    // 3. if not, update user document
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      filteredBody,
      {
        new: true,
        runValidators: true,
      },
    );

    res.status(200).json({
      status: 'success',
      data: {
        user: updatedUser,
      },
    });
  },
);

// allow user to delete his own account
export const deleteMe = catchAsync(
  async (req: UserRequest, res: Response, next: NextFunction) => {
    // we don't need to pass any data with the request from the frontend
    await User.findByIdAndUpdate(req.user.id, { active: false });

    res.status(204).json({
      status: 'success',
      data: null,
    });
  },
);

////////////////////////////////////////////////////////////////////////////////////////////
// for administrators
export const getAllUsers = (req: Request, res: Response) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet implemented',
  });
};
export const createUser = (req: Request, res: Response) => {};
export const getUser = (req: Request, res: Response) => {};
export const updateUser = (req: Request, res: Response) => {};
export const deleteUser = (req: Request, res: Response) => {};

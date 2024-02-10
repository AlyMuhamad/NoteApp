import { Request, Response, NextFunction } from 'express';
import Note from '../models/noteModel';
import APIFeatures from '../Utils/apiFeatures';
import catchAsync from '../Utils/catchAsync';
import AppError from '../Utils/appError';

export const getAllNotes = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const features = new APIFeatures(Note.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const notes = await features.query;
    res.status(200).json({
      status: 'success',
      results: notes.length,
      data: {
        notes,
      },
    });
  },
);

export const getNote = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return next(new AppError('No note found with that id', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        note,
      },
    });
  },
);

export const createNote = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const newNote = Note.create(req.body);
    res.status(200).json({
      status: 'success',
      data: {
        data: newNote,
      },
    });
  },
);

export const updateNote = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!note) {
      return next(new AppError(`No note found with that ID`, 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        note,
      },
    });
  },
);

export const deleteNote = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const note = await Note.findByIdAndDelete(req.params.id);

    if (!note) {
      return next(new AppError(`No note found with that ID`, 404));
    }
    res.status(204).json({
      status: 'success',
      data: null,
    });
  },
);

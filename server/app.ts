import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import noteRouter from './routes/noteRoutes';
import userRouter from './routes/userRoutes';
import AppError from './Utils/appError';
import globalErrorHandler from './controllers/errorController';

const app = express();
app.use(cors());
app.use(express.json());

const corsOptions = {
  origin: ['https://expense-tracker-client-seven.vercel.app'],
  methods: ['GET,PUT,PATCH,POST,DELETE'],
  credentials: true,
};

app.use(cors(corsOptions));

app.use('/notes/addNotes', noteRouter);
app.use('/users', userRouter);

app.all('*', (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

export default app;

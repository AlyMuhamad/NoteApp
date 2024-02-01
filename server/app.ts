import express, { Request, Response } from 'express';
import cors from 'cors';
import noteRouter from './routes/noteRoutes';
import AppError from './Utils/appError';
import globalErrorHandler from './controllers/errorController';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/notes/addNotes', noteRouter);

app.all('*', (req: Request, res: Response, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

export default app;

import express, { NextFunction, Request, Response, response } from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
// import xss from 'xss-clean';
import hpp from 'hpp';
import cookieParser from 'cookie-parser';
import noteRouter from './routes/noteRoutes';
import userRouter from './routes/userRoutes';
import AppError from './Utils/appError';
import globalErrorHandler from './controllers/errorController';

// interface HeaderRequest extends Request{
//   setHeader: any
// }

const app = express();
// GLOBAL MIDDLEWAREs

app.use(cors());

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
});

app.use(helmet());

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this ip, Please try again in an hour',
});
app.use('/api', limiter);

app.use(express.json({ limit: '10kb' }));

app.use(cookieParser());

app.use(mongoSanitize());

// app.use(xss());

app.use(
  hpp({
    // whitelist for which we allow duplicates ex duration
    whitelist: ['duration'],
  }),
);

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

import dotenv from 'dotenv';
import mongoose from 'mongoose';

process.on('uncaughtExecption', err => {
  console.log(err);
  console.log('Uncaught execptions. shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: './config.env' });

import app from './app';

const DB = process.env.DATABASE;
mongoose
  .connect(DB ? DB : '', {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: true,
    // useUnifiedTopology: true,
  })
  // .then(connection => {
  .then(() => {
    console.log('DB connection successful');
  });

const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

console.log(app.get('env'));

process.on('unhandledRejection', (err: any) => {
  console.log('Unhandled error. shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

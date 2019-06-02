import express from 'express';
import mongoose from 'mongoose';
import session from "express-session";
import connectStore from "connect-mongo";
import { userRoutes } from './routes/index';
import { PORT, NODE_ENV, MONGO_URI, SESS_NAME, SESS_SECRET, SESS_LIFETIME } from './config';

(async () => {
  try {
    await mongoose.connect(MONGO_URI, { userNewUrlParser: true });
    console.log('MongoDB connected');

const app = express();
app.disable('x-powered-by');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiRouter = express.Router();
app.use('/api', apiRouter);
apiRouter.use('/users', userRoutes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  } catch (err) {
    console.log(err)
  }
})();
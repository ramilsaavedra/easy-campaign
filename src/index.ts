import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import passport from 'passport';
import './models/User';
import './services/passport';
import authRoute from './routes/authRoutes';

// @ts-ignore
import keys from '../config/keys';

mongoose.connect(keys.mongoURI);
const app: Application = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

authRoute(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));

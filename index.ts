import 'dotenv/config';
import express, { Application } from 'express';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import passport from 'passport';
import './models/User';
import './services/passport';
import authRoute from './routes/authRoutes';

mongoose.connect(process.env.MONGO_URI!);

const app: Application = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY!],
  })
);

app.use(passport.initialize());
app.use(passport.session());

authRoute(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));

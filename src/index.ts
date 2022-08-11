import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import './services/passport';
import authRoute from './routes/authRoutes';
// @ts-ignore
import keys from '../config/keys';

mongoose.connect(keys.mongoURI);
const app: Application = express();
authRoute(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));

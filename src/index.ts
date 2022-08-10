import express, { Application, Request, Response } from 'express';
import './services/passport';
import authRoute from './routes/authRoutes';

const app: Application = express();
authRoute(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));

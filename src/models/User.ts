import mongoose, { Schema } from 'mongoose';
import { IUser } from './UserInterface';

const userSchema = new Schema<IUser>({
  providerId: String,
  provider: String,
});

mongoose.model('users', userSchema);

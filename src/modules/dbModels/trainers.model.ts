// users.model.ts

import mongoose, { Schema } from 'mongoose';
import { ITrainer } from './interface';

const userSchema = new mongoose.Schema<ITrainer>(
  {
    fullName: String,
    gender: String,
    phone: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    birthday: Date,
    avatar: String,
    avatars: { type: [String] },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    //account: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
    account: { type: Schema.Types.ObjectId, ref: 'Account' },
    uuid: String,
    role: String,

    skills: { type: [String] },
    introduction: String,
    certificates: { type: [String] },
    yearExperience: Number,
    rate: Number,
  },
  {
    minimize: false,
  },
);
/*
export const collectionName = 'UserDoc'
export default mongoose.model<IUser>('UserDoc', userSchema);
*/

export const collectionName = 'trainers';
export default mongoose.model<ITrainer>(collectionName, userSchema, collectionName);

// users.model.ts

import mongoose, { Schema } from 'mongoose';
import { IUser } from './interface';

const userSchema = new mongoose.Schema<IUser>(
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
    createdAt: {
      type: Date,
      default: Date.now,
    },
    //account: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
    account: { type: Schema.Types.ObjectId, ref: 'Account' },
    uuid: String,
    type: String,
    role: String,
  },
  {
    minimize: false,
  },
);
/*
export const collectionName = 'UserDoc'
export default mongoose.model<IUser>('UserDoc', userSchema);
*/

export const collectionName = 'users';
export default mongoose.model<IUser>(collectionName, userSchema, collectionName);

import mongoose, { Schema, model, Document } from 'mongoose';
import { ISession } from './interface';

const sessionSchema = new Schema<ISession>(
  {
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    trainerUUID: { type: String, required: true },
    customerUUID: { type: String },
    programUUID: { type: String, required: true },
    status: { type: String },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    uuid: { type: String },
  },
  {
    minimize: false,
  },
);

export const collectionName = 'sessions';
export default mongoose.model<ISession>(collectionName, sessionSchema, collectionName);

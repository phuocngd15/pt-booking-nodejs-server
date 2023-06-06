import mongoose, { Schema, model, Document } from 'mongoose';
import { ISession } from './interface';
import { collectionName as userDB } from './users.model';
import { collectionName as trainerDB } from './trainers.model';
import { collectionProgram as programDb } from './servicePrograms.model';
import { collectionName as centerDb } from './gymCenters.model';
// status: 1-waiting 2-confirm 3-done, 4-fail
const sessionSchema = new Schema<ISession>(
  {
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    trainerUUID: { type: Schema.Types.ObjectId, ref: trainerDB },
    customerUUID: { type: Schema.Types.ObjectId, ref: userDB },
    programUUID: { type: Schema.Types.ObjectId, ref: programDb },
    gymCenterUUID: { type: Schema.Types.ObjectId, ref: centerDb },
    status: { type: Number, default: 2 },
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

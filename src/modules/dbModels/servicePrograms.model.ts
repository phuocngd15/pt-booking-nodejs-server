// Programs.model.ts
import mongoose, { Document, Schema } from 'mongoose';
import { IProgram, IAccount } from './interface';

const ProgramSchema = new mongoose.Schema<IProgram>(
  {
    serviceName: String,
    avatar: String,
    duration: String,
    description: String,
    programLevel: String,
    price: String,
    canBookBefore: {
      type: Number,
      integer: true,
      min: 0,
      max: 30,
      default: 7,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    category: { type: [String] },
    teachingStyle: { type: [String] },
    responsibleEmployees: [{ type: Schema.Types.ObjectId, ref: 'accounts' }],

    status: {
      type: String,
      default: 'Private',
    },
  },
  {
    minimize: false,
  },
);

export const collectionProgram = 'programs';
export default mongoose.model<IProgram>(collectionProgram, ProgramSchema, collectionProgram);

// Programs.model.ts
import mongoose, { Document, Schema } from 'mongoose';
import { IProgram, IAccount } from './interface';

const ProgramSchema = new mongoose.Schema<IProgram>(
  {
    serviceName: String,
    avatar: String,
    duration: String,
    description: String,
    price: String,
    uuid: String,

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
    serviceType: { type: [String] }, // mot class co nhieu tags, tags de danh dau loai lop hoc
    //responsibleEmployees: { type: [String] },
    responsibleEmployees: [{ type: Schema.Types.ObjectId, ref: 'accounts' }],

    state: {
      type: String,
      default: 'planing',
    },
    //  staffs: {type: Schema.Types.ObjectId, ref: 'Account'},
    //  responsibleEmployees: [{ type: Schema.Types.ObjectId, ref: 'Employee' }]
  },
  {
    minimize: false,
  },
);
/*
export const collectionName = 'ProgramDoc'
export default mongoose.model<IProgram>('ProgramDoc', ProgramSchema);
*/

export const collectionProgram = 'programs';
export default mongoose.model<IProgram>(collectionProgram, ProgramSchema, collectionProgram);

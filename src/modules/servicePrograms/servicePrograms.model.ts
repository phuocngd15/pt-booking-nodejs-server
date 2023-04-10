// Programs.model.ts
import mongoose, {Document , Schema} from 'mongoose';
import {IAccount} from '../accounts/accounts.model';

export interface IProgram  extends Document {
    _id: mongoose.Types.ObjectId;
    serviceName: string;
    avatar?: String,
    duration?: string;
    description: string;
    price: string;

    uuid:string;

    createdAt: Date;
    canBookBefore?: number;
    serviceType: string[];
    state?: string,
    responsibleEmployees?: IAccount['_id'][];
    //responsibleEmployees: [{ type: Schema.Types.ObjectId, ref: 'Employee' }]
    //responsibleEmployees: IAccount['_id'];
}


const ProgramSchema = new mongoose.Schema<IProgram>({
    serviceName: String,
    description: String,
    canBookBefore:{
        type: Number, integer: true, min: 0, max: 30,
        default:7
    },
    avatar: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    serviceType: { type: [String]},
    responsibleEmployees: [{ type: Schema.Types.ObjectId, ref: 'Account' }],

    state: {
        type: String,
        default: 'planing'
    }
  //  staffs: {type: Schema.Types.ObjectId, ref: 'Account'},
  //  responsibleEmployees: [{ type: Schema.Types.ObjectId, ref: 'Employee' }]
}, {
    minimize: false
});
/*
export const collectionName = 'ProgramDoc'
export default mongoose.model<IProgram>('ProgramDoc', ProgramSchema);
*/


export const collectionProgram = 'Programs';
export default mongoose.model<IProgram>(collectionProgram, ProgramSchema, collectionProgram);
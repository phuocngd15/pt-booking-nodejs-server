import mongoose, { Schema } from 'mongoose';
import {IAccount} from "./interface";



const accountSchema = new Schema<IAccount>({
    username: { type: String, required: true, unique:true },
    password: { type: String, required: true },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
export const collectionAccount = 'account';
export default mongoose.model<IAccount>(collectionAccount, accountSchema,collectionAccount);
import mongoose, { Schema } from 'mongoose';

export interface IAccount {
    _id: mongoose.Types.ObjectId;
    username: string;
    password: string;
    createdAt:Date;
}

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
// users.model.ts

import mongoose, {Schema} from 'mongoose';
import {IAccount} from '../accounts/accounts.model';

export interface IUser {
    _id: mongoose.Types.ObjectId;
    fullName: string;
    gender: string;
    phone: string;
    email: string;
    address: string;
    birthday: Date;
    avatar: string;
    createdAt: Date;
    account: IAccount['_id'];
}


const userSchema = new mongoose.Schema<IUser>({
    fullName: String,
    gender: String,
    phone: {
        type: String,
        unique: true,
        required: true
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
        default: Date.now
    },
    //account: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
    account: {type: Schema.Types.ObjectId, ref: 'Account'},
}, {
    minimize: false
});
/*
export const collectionName = 'UserDoc'
export default mongoose.model<IUser>('UserDoc', userSchema);
*/


export const collectionUser = 'users';
export default mongoose.model<IUser>(collectionUser, userSchema, collectionUser);
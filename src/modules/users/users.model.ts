// users.model.ts

import mongoose ,{Schema }from 'mongoose';
import { Account } from '../accounts/account.model';

export interface User {
    _id: mongoose.Types.ObjectId;
    gender: string;
    phone: string;
    email: string;
    address: string;
    birthday: Date;
    avatar: string;
    createdAt:Date;
    account: Account['_id'];
}

const userSchema = new mongoose.Schema<User>({
    gender: String,
    phone: {
        type: String,
        unique: true,
        required:true
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    address: String,
    birthday: Date,
    avatar: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    account: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
});

export default mongoose.model<User>('UserDoc', userSchema);

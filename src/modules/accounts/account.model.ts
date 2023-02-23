import mongoose, { Schema } from 'mongoose';

export interface Account {
    _id: mongoose.Types.ObjectId;
    email: string;
    password: string;
    createdAt:Date;
}

const accountSchema = new Schema<Account>({
    email: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model<Account>('Account', accountSchema);
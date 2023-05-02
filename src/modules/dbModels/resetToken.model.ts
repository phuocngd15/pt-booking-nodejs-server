import mongoose, { Document } from 'mongoose';
import {IResetToken} from "./interface";

const ResetTokenSchema = new mongoose.Schema({
    email: { type: String, required: true },
    token: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, expires: 3600 }, // Token will expire in 1 hour
});

const ResetToken = mongoose.model<IResetToken>('ResetToken', ResetTokenSchema);

export default ResetToken;

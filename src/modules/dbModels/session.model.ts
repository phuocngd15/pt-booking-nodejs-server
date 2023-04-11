import mongoose, { Schema, model, Document } from 'mongoose';
import {ISession} from "./interface";

const sessionSchema = new Schema<ISession>({
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    trainerUUID: { type: String, required: true },
}, {
    minimize: false,
});

export const collectionName = 'sessions';
export default mongoose.model<ISession>(collectionName, sessionSchema, collectionName);
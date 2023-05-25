import mongoose, { Schema } from 'mongoose';
import { IActivity } from './interface';

const activitiesTaskSchema = new Schema<IActivity>({
    _id: mongoose.Types.ObjectId,
    name: String,
    des: String,
    reps: String,
    sets: String,
    completedReps: String,
    level:{
        type: String,
        default: 'basic',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    duration: {
        type: String,
        default: '',
    },
    user: { type: Schema.Types.ObjectId, ref: 'users' },
    createByTrainer: { type: Schema.Types.ObjectId, ref: 'trainers' },
});
export const collectionName = 'activitiesTask';
export default mongoose.model<IActivity>(collectionName, activitiesTaskSchema, collectionName);

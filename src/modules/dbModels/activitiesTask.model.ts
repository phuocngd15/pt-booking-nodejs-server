import mongoose, { Schema } from 'mongoose';
import { IActivity } from './interface';

const activitiesTaskSchema = new Schema<IActivity>({
    _id: mongoose.Types.ObjectId,
    name: String,
    des: String,
    reps: String,
    completedReps: String,
    sets: Date,
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
    }
});
export const collectionName = 'activitiesTask';
export default mongoose.model<IActivity>(collectionName, activitiesTaskSchema, collectionName);

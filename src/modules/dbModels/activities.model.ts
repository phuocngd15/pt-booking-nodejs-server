import mongoose, { Schema } from 'mongoose';
import { IActivity } from './interface';

const activitiesSchema = new Schema<IActivity>({
    activityName: String,
    activityDes: String,
    activityReps: Number,
    activitySets: Number,
    activityLevel: {
        type: String,
        default: 'basic',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    completeAt: {
        type: Date,
    },
    duration: {
        type: String,
        default: '',
    },
    imageDemo: String,
},
    {
        minimize: false,
    },);
export const collectionName = 'activities';
export default mongoose.model<IActivity>(collectionName, activitiesSchema, collectionName);

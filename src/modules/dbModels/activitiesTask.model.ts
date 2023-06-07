import mongoose, { Schema } from 'mongoose';
import {IActivityTasks} from './interface';
//state of Activity: 1: new, 2:done, 3:failed
const activitiesTaskSchema = new Schema<IActivityTasks>({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  completeAt: {
    type: Date,
  },
  deadlineDay: {
    type: Date,
  },
  duration: {
    type: String,
    default: '',
  },
  state: { type: String, default: '1' },
  completedReps: String,

  user: { type: Schema.Types.ObjectId, ref: 'users' },
  activityInfo: { type: Schema.Types.ObjectId, ref: 'activities' },
  createByTrainer: { type: Schema.Types.ObjectId, ref: 'trainers' },
});
export const collectionName = 'activitiesTasks';
export default mongoose.model<IActivityTasks>(collectionName, activitiesTaskSchema, collectionName);

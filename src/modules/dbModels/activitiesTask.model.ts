import mongoose, { Schema } from 'mongoose';
import { IActivity } from './interface';
//state of Activity: 1: new, 2:done, 3:failed
const activitiesTaskSchema = new Schema<IActivity>({
  _id: mongoose.Types.ObjectId,
  name: String,
  des: String,
  reps: Number,
  sets: Number,
  state: { type: String, default: '1' },
  completedReps: String,
  level: {
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
  user: { type: Schema.Types.ObjectId, ref: 'users' },
  createByTrainer: { type: Schema.Types.ObjectId, ref: 'trainers' },
  imageDemo: String,
});
export const collectionName = 'activitiesTasks';
export default mongoose.model<IActivity>(collectionName, activitiesTaskSchema, collectionName);

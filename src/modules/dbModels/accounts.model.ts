import mongoose, { Schema } from 'mongoose';
import { IAccount } from './interface';

const accountSchema = new Schema<IAccount>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  power: { type: String, default: 'customer' },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  status: { type: String, required: true, default: 'active' },

  profile: { type: Schema.Types.ObjectId, refPath: 'profileModel' },
  profileModel: { type: String, enum: ['users', 'trainers'] },
});
export const collectionAccount = 'accounts';
export default mongoose.model<IAccount>(collectionAccount, accountSchema, collectionAccount);

import mongoose, { Schema } from 'mongoose';
import { IGymCenter } from './interface';

const GymCenterSchema: Schema = new Schema<IGymCenter>(
  {
    centerName: String,
    centerDes: String,
    centerAddressStr: String,
    centerAddressProvince: String,
    centerImageMain: String,
    centerGGLocation: {
      lat: Number,
      lng: Number,
    },
    centerGGContent: String,
    centerGGLabelMaker: String,
    centerOperatingDes: String,
    centerImages: [String],
  },
  {
    minimize: false,
  },
);
export const collectionName = 'gymCenters';
export default mongoose.model<IGymCenter>(collectionName, GymCenterSchema, collectionName);

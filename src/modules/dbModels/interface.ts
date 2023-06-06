import mongoose, { Document } from 'mongoose';

export interface IAccount extends Document {
  _id: mongoose.Types.ObjectId;
  username: string;
  password: string;
  power: string;
  createdAt: Date;
  key: string;
  status: string;
  profile: mongoose.Types.ObjectId;
  profileModel: 'users' | 'trainers';
}

export interface IActivity {
  _id: mongoose.Types.ObjectId;
  name: string;
  des: string;
  reps: number;
  sets: number;
  level?: string;
  createdAt?: Date;
  completeAt?: Date;
  duration?: string;
  completedReps?: string;
  user: IUser['_id'];
  createByTrainer: ITrainer['_id'];
  imageDemo?: string;
  state: string;
}

export interface IProgram {
  _id: mongoose.Types.ObjectId;
  serviceName: string;
  avatar?: string;
  duration?: number;
  description?: string;
  programLevel: string;
  price: string;
  createdAt: Date;
  canBookBefore?: number;
  category: string[];
  teachingStyle: string[];
  status?: string;
  responsibleEmployees?: IAccount['_id'][];
}

export interface IUser {
  _id: mongoose.Types.ObjectId;
  fullName: string;
  gender: string;
  phone: string;
  email: string;
  address: string;
  birthday: Date;
  avatar: string;
  createdAt: Date;
  account: IAccount['_id'];
  tags: string[];
  uuid: string;
  type: string;
  role: string;
  introduction: string;
  age: number;
  weight: number;
  height: number;
  tickets: ISession[];
}

export interface ITrainer extends IUser {
  skills: string[];
  rate: number;
  certificates: string[];
  avatars: string[];
  yearExperience: number;
}

export interface ISession extends Document {
  startTime: Date;
  endTime: Date;
  trainerUUID: ITrainer['_id'];
  customerUUID: IUser['_id'];

  programUUID: IProgram['_id'];
  gymCenterUUID: IGymCenter['_id'];

  status: number;
  uuid: string;

  createdAt: Date;
  updatedAt: Date;
}
export interface IResetToken {
  email: string;
  token: string;
  createdAt: Date;
  expired: boolean;
}

export interface IGymCenter extends Document {
  centerName: string;
  centerDes: string;
  centerAddressStr: string;
  centerImageMain: string;
  centerGGLocation: {
    lat: number;
    lng: number;
  };
  centerGGContent: string;
  centerGGLabelMaker: string;
  centerOperatingDes: string;
  centerImages: string[];
  centerAddressProvince: string;
}

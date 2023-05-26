import mongoose from 'mongoose';

export interface IAccount {
  _id: mongoose.Types.ObjectId;
  username: string;
  password: string;
  power: string;
  createdAt: Date;
  key: string;
  status: string;
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
  duration?: string;
  description: string;
  price: string;

  uuid: string;

  createdAt: Date;
  canBookBefore?: number;
  serviceType: string[];
  state?: string;
  responsibleEmployees?: string[];
  //responsibleEmployees?: IAccount['_id'][];
  //responsibleEmployees: [{ type: Schema.Types.ObjectId, ref: 'Employee' }]
  //responsibleEmployees: IAccount['_id'];
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
  trainerUUID?: string;
  customerUUID?: IUser['_id'];

  programUUID: string;

  status: string;
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

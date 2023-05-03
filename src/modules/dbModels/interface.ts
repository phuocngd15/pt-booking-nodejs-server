import mongoose from 'mongoose';

export interface IAccount {
  _id: mongoose.Types.ObjectId;
  username: string;
  password: string;
  power: string;
  createdAt: Date;
  key:string;
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

  uuid: string;
  type: string;
  role: string;
}

export interface ITrainer extends IUser {
  skills: string[];

  rate: number;
  certificates: string[];
}

export interface ISession extends Document {
  startTime: Date;
  endTime: Date;
  trainerUUID?: string;
  customerUUID?: string;

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
import mongoose from "mongoose";

export interface IAccount {
    _id: mongoose.Types.ObjectId;
    username: string;
    password: string;
    createdAt:Date;
}

export interface IProgram {
    _id: mongoose.Types.ObjectId;
    serviceName: string;
    avatar?: String,
    duration?: string;
    description: string;
    price: string;

    uuid:string;

    createdAt: Date;
    canBookBefore?: number;
    serviceType: string[];
    state?: string,
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

    uuid:string;
    role: string;
}

export interface ITrainer extends IUser{
    skills: string[];

    rate: number;
    certificates:string[];
}

export interface ISession extends Document {
    startTime: Date;
    endTime: Date;
    trainerUUID: string;
    customerUUID: string;
    status: string;

    createdAt: Date;
    updatedAt: Date;
}
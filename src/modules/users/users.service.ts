// users.service.ts
import UserDoc, { User } from './users.model';

export const create = async (data: User): Promise<User> => {
    const user = new UserDoc(data);
    return user.save();
};

export const findById = async (id: string): Promise<User | null> => {
    return UserDoc.findById(id).exec();
};

export const findAll = async (): Promise<User[]> => {
    return UserDoc.find().exec();
};

export const update = async (id: string, data: User): Promise<User | null> => {
    return UserDoc.findByIdAndUpdate(id, data, { new: true }).exec();
};

export const remove = async (id: string): Promise<User | null> => {
    return UserDoc.findByIdAndRemove(id).exec();
};

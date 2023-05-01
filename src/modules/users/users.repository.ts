import UserDoc from '../dbModels/users.model';
import {IUser} from "../dbModels/interface";


const create = async (user: Partial<IUser>): Promise<IUser> => {
    const createdUser = new UserDoc(user);
    return createdUser.save();
}

const findById = async (userId: string): Promise<IUser | null> => {
    return UserDoc.findById(userId).exec();
}

const findByUUId = async (uuids: string[]): Promise<IUser[] | null> => {
    return UserDoc.find({ userId: { $in: uuids } }).exec();
}

const findByEmail = async (email: string): Promise<IUser | null> => {
    return UserDoc.findOne({ email : { $in: email } }).exec();
}

const findAll = async (): Promise<IUser[]> => {
    return UserDoc.find().exec();
}

const update = async (userId: string, updateUser: Partial<IUser>): Promise<IUser | null> => {
    return UserDoc.findByIdAndUpdate(userId, updateUser, {new: true}).exec();
}

const deleteUser = async (userId: string): Promise<IUser | null> => {
    return UserDoc.findByIdAndDelete(userId).exec();
}

export {
    create,
    findById,
    findAll,
    update,
    deleteUser,
    findByUUId,
    findByEmail
}


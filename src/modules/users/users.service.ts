// users.service.ts
import {IUser} from './users.model';
import {create, findAll, findById, update,deleteUser as deleteUserRepo} from "./user.repository";


const createUser = async (user: IUser): Promise<IUser> => {
    return await create(user);
}

const getUserById = async (id: string): Promise<IUser | null> => {
    return await findById(id);
}

const updateUser = async (id: string, updates: Partial<IUser>): Promise<IUser | null> => {
    return await update(id, updates);
}

const deleteUser = async (id: string): Promise<boolean> => {
    const result = await deleteUserRepo(id);
    if (!result) {
        return false;
    } else return true
}

const getAllUsers = async (): Promise<IUser[]> => {
    return await findAll();
}
export {
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    getAllUsers
}
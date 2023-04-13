// users.service.ts

import {
    create,
    findAll,
    findById,
    update,
    deleteUser as deleteUserRepo,
    findByUUId,
    findByEmail
} from "./users.repository";
import {IUser} from "../dbModels/interface";

class UsersService {
    public async createUser(user: Partial<IUser>): Promise<IUser> {
        return await create(user);
    }

    public async getUserById(id: string): Promise<IUser | null> {
        return await findById(id);
    }

    public async findUsersByUUID(uuids: string[]): Promise<IUser[] | null> {
        try {
            const users = await findByUUId(uuids);

            return users
        } catch (error) {
            console.error(error);
            return null;
        }
    };

    public async findUserByEmail(uuids: string): Promise<IUser | null> {
        try {
            const users = await findByEmail(uuids);

            return users
        } catch (error) {
            console.error(error);
            return null;
        }
    };

    public async updateUser(id: string, updates: Partial<IUser>): Promise<IUser | null> {
        return await update(id, updates);
    }

    public async deleteUser(id: string): Promise<boolean> {
        const result = await deleteUserRepo(id);
        if (!result) {
            return false;
        } else return true
    }

    public async getAllUsers(): Promise<IUser[]> {
        return await findAll();
    }
}

export default UsersService


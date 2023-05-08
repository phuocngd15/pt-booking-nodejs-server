import {
  create,
  findAll,
  findById,
  update,
  deleteUser as deleteUserRepo,
  findByUUId,
  findByEmail,
} from './users.repository';
import { IUser } from '../dbModels/interface';
import UserDoc from "../dbModels/users.model";
import AccountModel from "../dbModels/accounts.model";

class UsersService {
  public async createUser(user: Partial<IUser>): Promise<IUser> {
    return await create(user);
  }

  public async getUserById(id: string): Promise<IUser | null> {
    return await findById(id);
  }

  public async getUserByEmail(email: string): Promise<IUser | null> {
    if (!email) {
      return null;
    }
    const user = await UserDoc.findOne({ email: email }).exec();
    return user ? user.toObject() : null;
  }

  public async findUsersByUUID(uuids: string[]): Promise<IUser[] | null> {
    try {
      const users = await findByUUId(uuids);

      return users;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  public async findUserByEmail(email: string): Promise<IUser | null> {
    try {
      const users = await findByEmail(email);

      return users;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  public async updateUser(id: string, updates: Partial<IUser>): Promise<IUser | null> {
    return await update(id, updates);
  }

  public async deleteUser(id: string): Promise<boolean> {
    const result = await deleteUserRepo(id);
    if (!result) {
      return false;
    } else return true;
  }

  public async getAllUsers(): Promise<IUser[]> {
    return await findAll();
  }
}

export default UsersService;

import {create, findById,findAll,update,deleteAccount} from './accounts.repository'
import {IAccount} from "../dbModels/interface";

class AccountsService {
    public async create(account: IAccount): Promise<IAccount> {
        const result = await create(account);
        return result;
    }

    public async getById(id: string): Promise<IAccount | null> {
        const result = await findById(id);
        return result;
    }

    public async getAll(): Promise<IAccount[]> {
        const result = await findAll();
        return result;
    }

    public async update(id: string, account: IAccount): Promise<IAccount | null> {
        const result = await update(id,account);
        return result;
    }

    public async delete(id: string): Promise<boolean> {
        const result = await deleteAccount(id);
        return !!result;
    }
}

export default AccountsService;

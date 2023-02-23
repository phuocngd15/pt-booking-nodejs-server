import mongoose from 'mongoose';
import AccountModel, { Account } from './account.model';

class AccountService {
    public async create(account: Account): Promise<Account> {
        const createdAccount = await AccountModel.create(account);
        return createdAccount.toObject();
    }

    public async getById(id: string): Promise<Account | null> {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return null;
        }
        const account = await AccountModel.findById(id).exec();
        return account ? account.toObject() : null;
    }

    public async getAll(): Promise<Account[]> {
        const accounts = await AccountModel.find().exec();
        return accounts.map((account) => account.toObject());
    }

    public async update(id: string, account: Account): Promise<Account | null> {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return null;
        }
        const updatedAccount = await AccountModel.findByIdAndUpdate(id, account, { new: true }).exec();
        return updatedAccount ? updatedAccount.toObject() : null;
    }

    public async delete(id: string): Promise<boolean> {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return false;
        }
        const result = await AccountModel.findByIdAndDelete(id).exec();
        return !!result;
    }
}

export default AccountService;

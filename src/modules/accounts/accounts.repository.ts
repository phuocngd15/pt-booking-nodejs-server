import Account from '../dbModels/accounts.model';
import AccountModel from "../dbModels/accounts.model";
import mongoose from "mongoose";
import {IAccount} from "../dbModels/interface";


const create = async (account: IAccount): Promise<IAccount> => {
    const createdAccount = await AccountModel.create(account);
    return createdAccount.toObject();
}

const findById = async (accountId: string): Promise<IAccount | null> => {
    if (!mongoose.Types.ObjectId.isValid(accountId)) {
        return null;
    }
    const account = await AccountModel.findById(accountId).exec();
    return account ? account.toObject() : null;
}

const findAll = async (): Promise<IAccount[]> => {
    const accounts = await AccountModel.find().exec();
    return accounts.map((account) => account.toObject());

}

const update = async (accountId: string, updateAccount: Partial<IAccount>): Promise<IAccount | null> => {
    if (!mongoose.Types.ObjectId.isValid(accountId)) {
        return null;
    }
    const updatedAccount = await AccountModel.findByIdAndUpdate(accountId, updateAccount, { new: true }).exec();
    return updatedAccount ? updatedAccount.toObject() : null;
}

const deleteAccount = async (accountId: string): Promise<IAccount | null> => {
    if (!mongoose.Types.ObjectId.isValid(accountId)) {
        return null;
    }
    return Account.findByIdAndDelete(accountId).exec();
}

export {
    create,
    findById,
    findAll,
    update,
    deleteAccount
}


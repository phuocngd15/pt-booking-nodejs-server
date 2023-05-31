import Account from '../dbModels/accounts.model';
import AccountModel from '../dbModels/accounts.model';
import mongoose from 'mongoose';
import { IAccount } from '../dbModels/interface';

const create = async (account: Partial<IAccount>): Promise<IAccount> => {
  const createdAccount = await AccountModel.create(account);
  return createdAccount.toObject();
};

const findById = async (accountId: string): Promise<IAccount | null> => {
  if (!mongoose.Types.ObjectId.isValid(accountId)) {
    return null;
  }
  const account = await AccountModel.findById(accountId).exec();
  return account ? account.toObject() : null;
};

const findByUsername = async (username: string): Promise<IAccount | null> => {
  if (!username) {
    return null;
  }
  const account = await AccountModel.findOne({ username: username }).populate('profile').exec();
  return account ? account.toObject() : null;
};

const findAll = async (): Promise<IAccount[]> => {
  const accounts = await AccountModel.find().populate('profile').exec();
  return accounts.map((account) => account.toObject());
};

const findAll2 = async (): Promise<IAccount[]> => {
  return AccountModel.find().populate('profile').exec();
};

const update = async (
  accountId: string,
  updateAccount: Partial<IAccount>,
): Promise<IAccount | null> => {
  if (!mongoose.Types.ObjectId.isValid(accountId)) {
    return null;
  }
  const updatedAccount = await AccountModel.findByIdAndUpdate(accountId, updateAccount, {
    new: true,
  }).exec();
  return updatedAccount ? updatedAccount.toObject() : null;
};

const deleteAccount = async (accountId: string): Promise<IAccount | null> => {
  if (!mongoose.Types.ObjectId.isValid(accountId)) {
    return null;
  }
  return Account.findByIdAndDelete(accountId).exec();
};

export { create, findById, findAll, update, deleteAccount, findByUsername, findAll2 };

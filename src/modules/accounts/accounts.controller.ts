import {Request, Response} from 'express';
import AccountsService from './accounts.service';

const accountService = new AccountsService();
export const getAll = async (req: Request, res: Response) => {
    const accounts = await accountService.getAll();
    res.json(accounts);
};

export const getOne = async (req: Request, res: Response) => {
    const id = req.params.id;
    const account = await accountService.getById(id);
    if (!account) {
        res.status(404).send('Account not found');
    } else {
        res.json(account);
    }
};

export const createOne = async (req: Request, res: Response) => {
    const account = req.body;
    const createdAccount = await accountService.create(account);
    res.json(createdAccount);
};

export const updateOne = async (req: Request, res: Response) => {
    const id = req.params.id;
    const account = req.body;
    const updatedAccount = await accountService.update(id, account);
    if (!updatedAccount) {
        res.status(404).send('Account not found');
    } else {
        res.json(updatedAccount);
    }
};

export const deleteOne = async (req: Request, res: Response) => {
    const id = req.params.id;
    const deleted = await accountService.delete(id);
    if (!deleted) {
        res.status(404).send('cannot delete account');
    } else {
        res.json(deleted);
    }
};

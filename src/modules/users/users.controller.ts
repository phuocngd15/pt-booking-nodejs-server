import { Request, Response } from 'express';

import UsersService from './users.service';
import { IUser } from '../dbModels/interface';

const usersService = new UsersService();
export const getUsersController = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await usersService.getAllUsers();
    console.log('users', users);
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getUserController = async (req: Request, res: Response): Promise<void> => {
  console.log('req', req.params);
  try {
    const id = req.params.id;
    const user = await usersService.getUserById(id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createUserController = async (req: Request, res: Response): Promise<void> => {
  const user: IUser = req.body;
  const newUser = await usersService.createUser(user);
  res.json(newUser);
};

export const updateUserController = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id;
  const user: IUser = req.body;
  const updatedUser = await usersService.updateUser(id, user);
  res.json(updatedUser);
};

export const deletedUserController = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id;
  const deletedUser = await usersService.deleteUser(id);
  res.json(deletedUser);
};

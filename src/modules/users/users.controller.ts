import { Request, Response } from 'express';

import UsersService from './users.service';
import { IUser } from '../dbModels/interface';
import sessionModel from '../dbModels/session.model';
import { SessionService } from '../sessionsBK/session.service';
import { getTrainerByUUID } from '../trainers/trainers.service';

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
  try {
    const user: IUser = req.body;
    const newUser = await usersService.createUser(user);
    res.json(newUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateUserController = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    const user: IUser = req.body;
    console.log('updateUserController', user);
    const updatedUser = await usersService.updateUser(id, user);
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deletedUserController = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id;
  const deletedUser = await usersService.deleteUser(id);
  res.json(deletedUser);
};

export const getUserByEmail = async (req: Request, res: Response): Promise<void> => {
  console.log('req', req.params);
  try {
    const email = req.params.email;
    const user = await usersService.getUserByEmail(email);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getMyCustomer = async (req: Request, res: Response): Promise<void> => {
  console.log('req', req.params);
  try {
    const trainerId = req.params.trainerId;
    const trainer = await getTrainerByUUID(trainerId);
    if (!trainer) {
      res.status(404).json({ message: 'not found' });
    } else {
      const tickets = await SessionService.getTicketsByTrainerUUID(`${trainerId}`);
      const user = await usersService.findUsersByUUID(
        tickets.map((e) => e.customerUUID?.toString()),
      );
      console.log('tickets', tickets);

      res.status(200).json({
        data: {
          users: user,
          tickets: tickets,
        },
        code: 1,
      });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

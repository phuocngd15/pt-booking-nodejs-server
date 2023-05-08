import express from 'express';
import {
  createUserController,
  deletedUserController, getUserByEmail,
  getUserController,
  getUsersController,
  updateUserController,
} from './users.controller';
import { requireLogin } from '../../middlewares/authenication.middleware';

const userRouter = express.Router();

userRouter.get('/', getUsersController);
userRouter.get('/:id', getUserController);
userRouter.get('/mail/:email', getUserByEmail);
userRouter.post('/', createUserController);
userRouter.put('/:id', updateUserController);
userRouter.delete('/:id', deletedUserController);

export { userRouter };

import {
  createTrainer,
  findTrainerBySkills,
  getAllTrainers,
  getTrainerByUUID,
  updateTrainer,
} from './trainers.service';
import { Request, Response } from 'express';
import { ITrainer, IUser } from '../dbModels/interface';
import AccountsService from '../accounts/accounts.service';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import bcrypt from 'bcrypt';

const accountService = new AccountsService();
const getTrainersByGroupController = async (req, res) => {
  try {
    const { groupName } = req.body;
    console.log('groupName ', req.body);
    if (groupName === 'All') {
      console.log('getAllTrainers');
      const data = await getAllTrainers();
      const result = {
        data: data,
        code: 1,
        message: 'ok',
      };
      res.json(result);
    } else {
      console.log('findTrainerBySkills');
      const skillArray = Array.isArray(groupName) ? groupName : [groupName];
      console.log('skillArray', skillArray);
      const data = await findTrainerBySkills(skillArray);
      const result = {
        data: data,
        code: 1,
        message: 'ok',
      };
      res.json(result);
    }
  } catch (err) {}
};
// get trainers by 1 service class
// const getTrainersByServiceIdController=async (req, res)=>{
//     try {
//         const {serviceId } = req.body;
//         console.log("serviceId ",req.body )
//         const data = generateTrainerData(10, serviceId)
//         const result ={
//             data: data,
//             code: 1,
//             message: 'ok',
//         }
//          res.json(result);
//     }
//     catch (err) {
//
//     }
// }

const updateTrainerController = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    const trainer: ITrainer = req.body;
    console.log('updateTrainerController', trainer);
    const updatedUser = await updateTrainer(id, trainer);
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const getTrainers = async (req: Request, res: Response): Promise<void> => {
  try {
    const trainers = await getAllTrainers();
    res.json(trainers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const getTrainerById = async (req: Request, res: Response): Promise<void> => {
  try {
    const trainerId = req.params.trainerId;
    const trainers = await getTrainerByUUID(trainerId);
    res.json(trainers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const addNewTrainer = async (req: Request, res: Response): Promise<void> => {
  try {
    const dataForm: AddNewTrainerDataForm = req.body;
    console.log('dataForm', dataForm);
    const existingAccount = await accountService.getByUserName(dataForm.username);
    if (existingAccount) {
      res.status(404).send('Email is invalid or already taken');
      return;
    }

    // Hash the password before saving to the database
    const hashedPassword = await bcrypt.hash(dataForm.password, 10);

    // Create a new account using the accountSchema model
    const newAccount = await accountService.create({
      username: dataForm.username,
      password: hashedPassword,
      profileModel: 'trainers',
    });

    const newTrainerInfo = await createTrainer({
      fullName: dataForm?.fullName,
      email: dataForm?.email,
      gender: dataForm?.gender,
      phone: dataForm?.phone,
      account: newAccount._id,
      avatar: dataForm?.avatarURl,
      skills: dataForm?.skills,
    });
    const result = {
      data: { acc: newAccount, profile: newTrainerInfo },
      code: 1,
      message: 'Trainer created successfully',
    };
    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};
interface AddNewTrainerDataForm {
  fullName: string;
  gender: string;
  email: string;
  skills: string[];
  username: string;
  password: string;
  phone: string;
  avatarURl: string;
}
export {
  getTrainersByGroupController,
  updateTrainerController,
  getTrainers,
  getTrainerById,
  addNewTrainer,
};

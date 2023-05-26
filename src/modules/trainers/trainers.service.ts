import { ITrainer, IUser } from '../dbModels/interface';
import TrainerDoc from '../dbModels/trainers.model';
import UserDoc from '../dbModels/users.model';
import mongoose from 'mongoose';
import { update } from '../users/users.repository';

const findTrainerByUUID = async (uuids: string[]): Promise<ITrainer[] | null> => {
  try {
    const uuidsArray = Array.isArray(uuids) ? uuids : [uuids];
    const trainers = await TrainerDoc.find({ uuid: { $in: uuidsArray } });

    return trainers;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const findTrainerBySkills = async (skills: string[]): Promise<ITrainer[] | null> => {
  try {
    const trainers = await TrainerDoc.find({ skills: { $in: skills } });

    return trainers;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getAllTrainers = async (): Promise<ITrainer[] | null> => {
  try {
    const trainers = await TrainerDoc.find().exec();

    return trainers;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getTrainerByUUID = async (uuid: string): Promise<ITrainer | null> => {
  try {
    const trainers = await TrainerDoc.findById(uuid).exec();

    return trainers;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const findTrainerByAccountID = async (account: string): Promise<ITrainer | null> => {
  try {
    // const uuidsArray = Array.isArray(account) ? uuids : [uuids];
    if (!mongoose.Types.ObjectId.isValid(account)) {
      return null;
    }
    const trainer = await TrainerDoc.findOne({ account: { $in: account } });

    return trainer;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const updateTrainer = async (
  id: string,
  updateTrainer: Partial<ITrainer>,
): Promise<ITrainer | null> => {
  // return await update(id, updates);
  return TrainerDoc.findByIdAndUpdate(id, updateTrainer, { new: true }).exec();
};

export {
  findTrainerByUUID,
  findTrainerBySkills,
  getAllTrainers,
  getTrainerByUUID,
  findTrainerByAccountID,
  updateTrainer,
};

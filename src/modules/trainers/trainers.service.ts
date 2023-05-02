import { ITrainer } from '../dbModels/interface';
import TrainerDoc from '../dbModels/trainers.model';
import UserDoc from '../dbModels/users.model';

const getTrainersOfServices = (serviceId: string) => {};
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
    const trainers = await TrainerDoc.findOne({ uuid: uuid }).exec();

    return trainers;
  } catch (error) {
    console.error(error);
    return null;
  }
};
export { findTrainerByUUID, findTrainerBySkills, getAllTrainers, getTrainerByUUID };

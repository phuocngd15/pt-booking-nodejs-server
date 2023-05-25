import { findTrainerBySkills, getAllTrainers, updateTrainer } from './trainers.service';
import { Request, Response } from 'express';
import { ITrainer, IUser } from '../dbModels/interface';

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
export { getTrainersByGroupController, updateTrainerController, getTrainers };

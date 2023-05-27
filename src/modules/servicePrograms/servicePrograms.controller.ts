import ProgramsService from './servicePrograms.service';
import { IUser } from '../dbModels/interface';

const service = new ProgramsService();
const getProgramDetailController = async (req, res): Promise<void> => {
  try {
    const serviceID = req.params.serviceID;
    console.log('uuid ', serviceID);
    const program = await service.findProgramByUUID(serviceID);
    //console.log('program.responsibleEmployees', program.responsibleEmployees);
    // const trainers = await findTrainerByAccountID(program.responsibleEmployees);
    console.log('program', program);

    const result = {
      data: program,
      code: 1,
      message: 'ok',
    };
    res.json(result);
  } catch (err) {
    console.error(err);
  }
};
const getAllProgramsController = async (req, res): Promise<void> => {
  try {
    const data = await service.getAllPrograms();
    const result = {
      data: data,
      code: 1,
      message: 'ok',
    };
    res.json(result);
  } catch (err) {
    console.error(err);
  }
};

const updateProgram = async (req, res): Promise<void> => {
  try {
    const id = req.params.id;
    const user: IUser = req.body;
    console.log('updateUserController', user);
    const updatedUser = await service.updateProgram(id, user);
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export { getProgramDetailController, getAllProgramsController, updateProgram };

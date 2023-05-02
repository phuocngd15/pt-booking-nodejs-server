import ProgramsDoc from '../dbModels/servicePrograms.model';
import { IProgram } from '../dbModels/interface';

const getAllPrograms = async (): Promise<IProgram[]> => {
  try {
    const services: IProgram[] = await ProgramsDoc.find().exec();
    return services;
  } catch (error) {
    console.error(error);
    throw new Error('Internal server error');
  }
};

const findProgramByUUID = async (uuid: string): Promise<IProgram | null> => {
  try {
    const service: IProgram = await ProgramsDoc.findOne({ uuid: uuid });

    return service;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { getAllPrograms, findProgramByUUID };

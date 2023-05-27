import ProgramsDoc from '../dbModels/servicePrograms.model';
import { IProgram, IUser } from '../dbModels/interface';
import UserDoc from '../dbModels/users.model';

export default class ProgramsService {
  public async createProgram(programs: Partial<IProgram>): Promise<IProgram> {
    const createdUser = new ProgramsDoc(programs);
    return createdUser.save();
  }
  public async updateProgram(id: string, updateUser: Partial<IProgram>): Promise<IProgram | null> {
    return ProgramsDoc.findByIdAndUpdate(id, updateUser, { new: true }).exec();
  }
  public async getAllPrograms(): Promise<IProgram[]> {
    try {
      const services: IProgram[] = await ProgramsDoc.find()
        .populate({
          path: 'responsibleEmployees',
          populate: {
            path: 'profile',
          },
        })
        .exec();
      return services;
    } catch (error) {
      console.error(error);
      throw new Error('Internal server error');
    }
  }

  public async findProgramByUUID(id: string): Promise<IProgram | null> {
    try {
      const service: IProgram = await ProgramsDoc.findById(id);

      return service;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

import GymCenterModel from '../dbModels/gymCenters.model';
import { IGymCenter } from '../dbModels/interface';
class GymCenterService {
  public async getAllGymCenters(): Promise<IGymCenter[]> {
    try {
      const gymCenters = await GymCenterModel.find();
      return gymCenters;
    } catch (error) {
      throw new Error('Failed to fetch GymCenters');
    }
  }

  public async getGymCenterById(id: string): Promise<IGymCenter | null> {
    try {
      const gymCenter = await GymCenterModel.findById(id);
      return gymCenter;
    } catch (error) {
      throw new Error('Failed to fetch GymCenter');
    }
  }

  public async createGymCenter(gymCenterData: IGymCenter): Promise<IGymCenter> {
    try {
      const gymCenter = new GymCenterModel(gymCenterData);
      const newGymCenter = await gymCenter.save();
      return newGymCenter;
    } catch (error) {
      throw new Error('Failed to create GymCenter');
    }
  }

  public async updateGymCenter(id: string, updatedData: IGymCenter): Promise<IGymCenter | null> {
    try {
      const gymCenter = await GymCenterModel.findByIdAndUpdate(id, updatedData, { new: true });
      return gymCenter;
    } catch (error) {
      throw new Error('Failed to update GymCenter');
    }
  }

  public async deleteGymCenter(id: string): Promise<IGymCenter | null> {
    try {
      const deletedGymCenter = await GymCenterModel.findByIdAndDelete(id);
      return deletedGymCenter;
    } catch (error) {
      throw new Error('Failed to delete GymCenter');
    }
  }
}

export default new GymCenterService();

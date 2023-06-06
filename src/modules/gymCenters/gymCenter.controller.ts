import { Request, Response } from 'express';
import GymCenterService from './gymCenter.service';
import { IGymCenter } from '../dbModels/interface';

class GymCenterController {
  public async getAllGymCenters(req: Request, res: Response): Promise<void> {
    try {
      const gymCenters = await GymCenterService.getAllGymCenters();
      res.status(200).json(gymCenters);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  public async getGymCenter(req: Request, res: Response): Promise<void> {
    try {
      const gymCenter = await GymCenterService.getGymCenterById(req.params.id);
      if (gymCenter) {
        res.status(200).json(gymCenter);
      } else {
        res.status(404).json({ error: 'GymCenter not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  public async createGymCenter(req: Request, res: Response): Promise<void> {
    try {
      const gymCenterData: IGymCenter = req.body;
      const newGymCenter = await GymCenterService.createGymCenter(gymCenterData);
      res.status(201).json(newGymCenter);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  public async updateGymCenter(req: Request, res: Response): Promise<void> {
    try {
      const gymCenterData: IGymCenter = req.body;
      const gymCenter = await GymCenterService.updateGymCenter(req.params.id, gymCenterData);
      if (gymCenter) {
        res.status(200).json(gymCenter);
      } else {
        res.status(404).json({ error: 'GymCenter not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  public async deleteGymCenter(req: Request, res: Response): Promise<void> {
    try {
      const deletedGymCenter = await GymCenterService.deleteGymCenter(req.params.id);
      if (deletedGymCenter) {
        res.status(200).json(deletedGymCenter);
      } else {
        res.status(404).json({ error: 'GymCenter not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

export default new GymCenterController();

import { Request, Response } from 'express';
import { activityService } from './activities.service';
import {IActivity} from "../dbModels/interface";

export const activityController = {
  createActivity: async (req: Request, res: Response) => {
    try {
      const newActivity: IActivity = req.body;
      console.log("newActivity",newActivity)
      const activity = await activityService.createActivity(newActivity);
      res.status(201).json(activity);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  getActivity: async (req: Request, res: Response) => {
    try {
      const activity = await activityService.getActivity(req.params.id);
      if (!activity) {
        return res.status(404).json({ message: 'Activity not found' });
      }
      res.json(activity);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  getAllActivities: async (req: Request, res: Response) => {
    try {
      const activities = await activityService.getAllActivities();
      res.json(activities);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  updateActivity: async (req: Request, res: Response) => {
    try {
      const activity = await activityService.updateActivity(req.params.id, req.body);
      if (!activity) {
        return res.status(404).json({ message: 'Activity not found' });
      }
      res.json(activity);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  deleteActivity: async (req: Request, res: Response) => {
    try {
      const activity = await activityService.deleteActivity(req.params.id);
      if (!activity) {
        return res.status(404).json({ message: 'Activity not found' });
      }
      res.json({ message: 'Activity deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};

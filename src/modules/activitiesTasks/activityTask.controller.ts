import { Request, Response } from 'express';
import { activityTaskService } from './activityTask.service';
import {IActivity, IActivityTasks, ITrainer, IUser} from "../dbModels/interface";

export const activityTaskController = {
    createActivityTask: async (req: Request, res: Response) => {
        try {
            const activity: IActivityTasks = req.body;
            console.log("activity",activity)
            const activityTask = await activityTaskService.createActivityTask(activity);
            await activityTask.populate(['user','createByTrainer','activityInfo'])
            res.status(201).json(activityTask);
        } catch (error) {
            console.log("e",error)
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    getActivityTask: async (req: Request, res: Response) => {
        try {
            const activityTask = await activityTaskService.getActivityTask(req.params.id);
            if (!activityTask) {
                return res.status(404).json({ message: 'Activity task not found' });
            }
            res.json(activityTask);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    getAllActivityTasks: async (req: Request, res: Response) => {
        try {
            const activityTasks = await activityTaskService.getAllActivityTasks();
            res.json(activityTasks);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    updateActivityTask: async (req: Request, res: Response) => {
        try {
            const id= req.params.id
            const aTask= req.body
            console.log("aTask",aTask,id)
            const activityTask = await activityTaskService.updateActivityTask(id, aTask);
            if (!activityTask) {
                return res.status(404).json({ message: 'Activity task not found' });
            }
            res.json(activityTask);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    deleteActivityTask: async (req: Request, res: Response) => {
        try {
            const activityTask = await activityTaskService.deleteActivityTask(req.params.id);
            if (!activityTask) {
                return res.status(404).json({ message: 'Activity task not found' });
            }
            res.json({ message: 'Activity task deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    },
    getActivitiesByUserAndState: async (req: Request, res: Response) => {
        try {
            const userId = req.params.userId;
            const state = req.params.state;
            console.log("userId, state",userId,state)
            const activities = await activityTaskService.getActivitiesByUserAndState(userId, state);

            res.json(activities);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    },
};

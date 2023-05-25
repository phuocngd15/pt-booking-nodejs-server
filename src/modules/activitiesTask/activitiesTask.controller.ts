import {Request, Response} from "express";
import ActivitiesTaskService from "./activitiesTask.service";
import {IActivity, IUser} from "../dbModels/interface";


const service= new ActivitiesTaskService();
export const controllerGetActivitiesOfUser = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const activities = await service.getByUserid(id);
        res.json(activities);
    }
    catch (e) {
        res.status(404).send("system error")
    }
};
export const controllerGetActivitiesByTrainerCreate = async (req: Request, res: Response) => {
    try {
        const activities = await service.getAll();
        res.json(activities);
    }
    catch (e) {
        res.status(404).send("system error")
    }
};
export const controllerUpdateActivities = async (req: Request, res: Response) => {
    const id = req.params.id;
    // const account = await accountService.getById(id);
    console.log("req.params.id",req.params.id)
    console.log("req.query",req.query)
    try {
        const id = req.params.id;
        const { durationTime, completeReps } = req.query;
        const activity: IActivity =req.body;
        const result = await service.completeOne(id, activity);
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
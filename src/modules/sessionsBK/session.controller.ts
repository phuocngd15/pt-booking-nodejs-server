import { Request, Response } from 'express';
import { SessionService } from './session.service';

export const SessionController = {
    async getAvailableTimeSlots(req: Request, res: Response) {
        const { trainerId, date } = req.params;
        const availableTimeSlots = await SessionService.getAvailableTimeSlots(trainerId, new Date(date));
        res.json(availableTimeSlots);
    }
};
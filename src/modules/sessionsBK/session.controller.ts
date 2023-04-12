import { Request, Response } from 'express';
import { SessionService } from './session.service';

export const SessionController = {
    async getAvailableTimeSlots(req: Request, res: Response) {
        try {
            const { trainerId, date } = req.body;
            const availableTimeSlots = await SessionService.getAvailableTimeSlots(trainerId, new Date(date));
            res.json({
                code:1,
                message: 'ok',
                data:availableTimeSlots
            });
        }
        catch (e) {

        }
    }
};
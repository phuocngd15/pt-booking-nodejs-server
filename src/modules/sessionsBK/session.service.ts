import SessionModel from "../dbModels/session.model";
import {ISession} from "../dbModels/interface";

export const SessionService = {
    async getAvailableTimeSlots(trainerId: string, date: Date): Promise<Date[]> {
        const startOfDay = new Date(date);
        startOfDay.setHours(0, 0, 0, 0);
        const endOfDay = new Date(date);
        endOfDay.setHours(23, 59, 59, 999);
        const sessions = await SessionModel.find({ trainerId, startTime: { $gte: startOfDay }, endTime: { $lte: endOfDay } });
        const occupiedTimeSlots = sessions.reduce((acc: Date[], session: ISession) => {
            const startTime = new Date(session.startTime);
            const endTime = new Date(session.endTime);
            while (startTime < endTime) {
                acc.push(new Date(startTime));
                startTime.setHours(startTime.getHours() + 1);
            }
            return acc;
        }, []);
        const availableTimeSlots = [];
        let currentTime = new Date(startOfDay);
        while (currentTime < endOfDay) {
            if (!occupiedTimeSlots.find(timeSlot => timeSlot.getTime() === currentTime.getTime())) {
                availableTimeSlots.push(new Date(currentTime));
            }
            currentTime.setHours(currentTime.getHours() + 1);
        }
        return availableTimeSlots;
    }
};
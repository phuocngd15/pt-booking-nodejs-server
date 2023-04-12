import SessionModel from "../dbModels/session.model";
import {ISession} from "../dbModels/interface";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

export const SessionService = {
    async getAvailableTimeSlots(trainerId: string, date: Date): Promise<Date[]> {
        const startOfDay = dayjs.tz(date, 'Asia/Bangkok').startOf('day');
        const endOfDay = dayjs.tz(date, 'Asia/Bangkok').endOf('day');

        const sessions = await SessionModel.find({
            trainerId,
            startTime: { $gte: startOfDay.toDate() },
            endTime: { $lte: endOfDay.toDate() },
        });

        const occupiedTimeSlots = sessions.reduce((acc, session) => {
            let startTime = dayjs.tz(session.startTime, 'Asia/Bangkok').add(5, 'hour');
            const endTime = dayjs.tz(session.endTime, 'Asia/Bangkok').add(5, 'hour');
            while (startTime < endTime) {
                acc.push(startTime.format('YYYY-MM-DDTHH:mm:ss.SSSZ'));
                startTime = startTime.add(1, 'hour');
            }
            return acc;
        }, []);

        const availableTimeSlots = [];
        let currentTime = dayjs.tz(startOfDay, 'Asia/Bangkok').add(5, 'hour');

        while (currentTime < endOfDay) {
            if (!occupiedTimeSlots.includes(currentTime.format('YYYY-MM-DDTHH:mm:ss.SSSZ'))) {
                availableTimeSlots.push(currentTime.format('YYYY-MM-DDTHH:mm:ss.SSSZ'));
            }
            currentTime = currentTime.add(1, 'hour');
        }

        return availableTimeSlots;
    }
};
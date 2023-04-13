import SessionModel from "../dbModels/session.model";
import {ISession} from "../dbModels/interface";
import dayjs, {Dayjs} from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { v4 as uuidv4 } from 'uuid';
dayjs.extend(utc);
dayjs.extend(timezone);

export const SessionService = {
    async getAvailableTimeSlots(trainerId: string, date: Date): Promise<Date[]> {
        const startOfDay = dayjs.utc(date).local().startOf('day');
        const endOfDay = dayjs.utc(date).local().endOf('day');

        const sessions = await SessionModel.find({
            trainerUUID: trainerId,
            startTime: { $gte: startOfDay.toDate() },
            endTime: { $lte: endOfDay.toDate() },
        });
        console.log("sessions",sessions)
        const occupiedTimeSlots = sessions.reduce((acc, session) => {
            let startTime = dayjs.utc(session.startTime);
            const endTime = dayjs.utc(session.endTime);
            while (startTime < endTime) {
                acc.push(startTime);
                startTime = startTime.add(1, 'hour');
            }
            return acc;
        }, []);
        console.log("occupiedTimeSlots",occupiedTimeSlots)
        const availableTimeSlots = [];
        let currentTime = dayjs.utc(date).local().startOf('day').add(5,'hour');

        while (currentTime < endOfDay) {
            console.log("currentTime",currentTime)
            if (!occupiedTimeSlots.map(e=>e.valueOf()).includes(currentTime.valueOf())) {
                availableTimeSlots.push(currentTime.local().toDate());
            }
            currentTime = currentTime.add(1, 'hour');
        }
        return availableTimeSlots;
    },
    async createTicket(programUUID: string, trainerUUID: string, cusUUID: string, date: Date, time: Date): Promise<ISession> {
        // Generate a new UUID for the ticket
        const ticketUUID = uuidv4();

        const newTicket: Partial<ISession>={
            uuid: ticketUUID,
            programUUID: programUUID,
            trainerUUID: trainerUUID,
            customerUUID: cusUUID,
            startTime: dayjs(time).utc().toDate(),
            endTime: dayjs(time).add(1, 'hour').utc().toDate()
        }
        // Create a new Ticket object
        const ticket = new SessionModel(newTicket);

        // Save the ticket to the database
        await ticket.save();

        // Return the created ticket object
        return ticket;
    },

    async getTicketsByCustomerUUID(customerUUID:string) {
        const tickets = await SessionModel.find({ customerUUID:customerUUID }).exec();
        return tickets;
    },

    async getTicketsByTrainerUUID(trainerUUID:string) {
        const tickets = await SessionModel.find({ trainerUUID:trainerUUID }).exec();
        return tickets;
    } ,

    async getTickets() {
        const tickets = await SessionModel.find().exec();
        return tickets;
    }
};
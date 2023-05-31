import SessionModel from '../dbModels/session.model';
import { IProgram, ISession, ITrainer, IUser } from '../dbModels/interface';
import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { v4 as uuidv4 } from 'uuid';
import ServiceProgramsModel from '../dbModels/servicePrograms.model';
import usersModel from '../dbModels/users.model';
import trainersModel from '../dbModels/trainers.model';

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
    console.log('sessions', sessions);
    const occupiedTimeSlots = sessions.reduce((acc, session) => {
      let startTime = dayjs.utc(session.startTime);
      const endTime = dayjs.utc(session.endTime);
      while (startTime < endTime) {
        acc.push(startTime);
        startTime = startTime.add(1, 'hour');
      }
      return acc;
    }, []);
    console.log('occupiedTimeSlots', occupiedTimeSlots);
    const availableTimeSlots = [];
    let currentTime = dayjs.utc(date).local().startOf('day').add(5, 'hour');

    while (currentTime < endOfDay) {
      console.log('currentTime', currentTime);
      if (!occupiedTimeSlots.map((e) => e.valueOf()).includes(currentTime.valueOf())) {
        availableTimeSlots.push(currentTime.local().toDate());
      }
      currentTime = currentTime.add(1, 'hour');
    }
    return availableTimeSlots;
  },
  async createTicket(
    programUUID: IProgram['_id'],
    trainerUUID: ITrainer['_id'],
    cusUUID: IUser['_id'],
    date: Date,
    time: Date,
  ): Promise<ISession> {
    // Generate a new UUID for the ticket
    const ticketUUID = uuidv4();
    // status: 1-waiting 2-confirm 3-done, 4-fail
    const newTicket: Partial<ISession> = {
      uuid: ticketUUID,
      programUUID: programUUID,
      trainerUUID: trainerUUID,
      customerUUID: cusUUID,
      startTime: dayjs(time).utc().toDate(),
      endTime: dayjs(time).add(1, 'hour').utc().toDate(),
      status: 1
    };
    // Create a new Ticket object
    const ticket = new SessionModel(newTicket);

    // Save the ticket to the database
    await ticket.save().then((e) => e.populate(['customerUUID', 'programUUID', 'trainerUUID']));

    // Return the created ticket object
    return ticket;
  },

  async getTicketsByCustomerUUID(customerUUID: string) {
    const tickets = await SessionModel.find({ customerUUID: customerUUID })
      .populate(['trainerUUID', 'programUUID'])
      .lean()
      .exec();
    return tickets;
  },

  async getTicketsByTrainerUUID(trainerUUID: string) {
    const tickets = await SessionModel.find({ trainerUUID: trainerUUID })
      .populate(['trainerUUID', 'programUUID', 'customerUUID'])
      .lean()
      .exec();
    return tickets;
  },

  async getTickets() {
    const tickets = await SessionModel.find().populate(['trainerUUID', 'programUUID', 'customerUUID']).exec();
    return tickets;
  },
  async getTicketByTicketUUID(uuid: string): Promise<ISession[]> {
    const ticket = await SessionModel.find({ uuid: uuid }).exec();
    return ticket;
  },
};

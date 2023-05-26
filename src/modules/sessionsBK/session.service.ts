import SessionModel from '../dbModels/session.model';
import { ISession, IUser } from '../dbModels/interface';
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
    programUUID: string,
    trainerUUID: string,
    cusUUID: IUser['_id'],
    date: Date,
    time: Date,
  ): Promise<ISession> {
    // Generate a new UUID for the ticket
    const ticketUUID = uuidv4();

    const newTicket: Partial<ISession> = {
      uuid: ticketUUID,
      programUUID: programUUID,
      trainerUUID: trainerUUID,
      customerUUID: cusUUID,
      startTime: dayjs(time).utc().toDate(),
      endTime: dayjs(time).add(1, 'hour').utc().toDate(),
    };
    // Create a new Ticket object
    const ticket = new SessionModel(newTicket);

    // Save the ticket to the database
    await ticket.save();

    // Return the created ticket object
    return ticket;
  },

  async getTicketsByCustomerUUID(customerUUID: string) {
    const tickets = await SessionModel.find({ customerUUID: customerUUID }).lean().exec();

    const classrooms = await ServiceProgramsModel.find()
      .select('serviceName uuid description')
      .lean()
      .exec();
    const trainers = await trainersModel.find().select('fullName uuid').lean().exec();
    const customers = await usersModel
      .find({ uuid: { $in: tickets.map((e) => e.customerUUID) } })
      .lean()
      .exec();

    return tickets.map((ticket) => {
      const classroom = classrooms.find((c) => c.uuid === ticket.programUUID);
      const trainer = trainers.find((c) => c.uuid === ticket.trainerUUID);
      const customer = customers.find((c) => c.uuid === ticket.customerUUID.toString());
      return {
        ...ticket,
        classroom: classroom || null,
        trainer: trainer || null,
        customer: customer,
      };
    });

    return tickets;
  },

  async getTicketsByTrainerUUID(trainerUUID: string) {
    const tickets = await SessionModel.find({
      trainerUUID: trainerUUID,
    })
      .populate('customerUUID')
      .exec();
    return tickets;
  },

  async getTickets() {
    const tickets = await SessionModel.find().exec();
    return tickets;
  },
  async getTicketByTicketUUID(uuid: string): Promise<ISession[]> {
    const ticket = await SessionModel.find({ uuid: uuid }).exec();
    return ticket;
  },
};

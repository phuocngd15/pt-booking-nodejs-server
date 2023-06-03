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
    // status: 1-waiting 2-confirm 3-done, 4-fail
  async  updateStatusTicket(id: string, status: number): Promise<ISession> {
    try {
      const ticket = await SessionModel.findById(id);

      if (!ticket) {
        throw new Error("Ticket not found"); // Handle case when ticket is not found
      }

      ticket.status = status; // Update the status to "2" (confirmed)
      await ticket.save(); // Save the changes to the ticket

      return ticket; // Return the updated ticket
    } catch (error) {
      throw new Error("Failed to confirm ticket: " + error.message); // Handle any errors that occurred
    }
  },

  async getTicketStatisticsByDay() {
    try {
      const today = dayjs().startOf('day');
      const sevenDaysAgo = dayjs(today).subtract(6, 'days').startOf('day');
      console.log("today",today)
      console.log("sevenDaysAgo",sevenDaysAgo)
      const statistics = await SessionModel.aggregate([
        {
          $match: {
            createdAt: { $gte: sevenDaysAgo.toDate(), $lte: today.toDate() },
          },
        },
        {
          $group: {
            _id: {
              $dateToString: { format: '%Y-%m-%d', date: '$createdAt' },
            },
            status1: {
              $sum: { $cond: [{ $eq: ['$status', 1] }, 1, 0] },
            },
            status2: {
              $sum: { $cond: [{ $eq: ['$status', 2] }, 1, 0] },
            },
            status3: {
              $sum: { $cond: [{ $eq: ['$status', 3] }, 1, 0] },
            },
            status4: {
              $sum: { $cond: [{ $eq: ['$status', 4] }, 1, 0] },
            },
          },
        },
        {
          $sort: { _id: 1 },
        },
      ]);

      return statistics;
    } catch (error) {
      // Handle the error appropriately
      console.error('Error retrieving ticket statistics:', error);
      throw error;
    }
  }


};

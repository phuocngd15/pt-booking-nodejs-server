import { Request, Response } from 'express';
import { SessionService } from './session.service';
import UsersService from '../users/users.service';
import { IProgram, ISession, IUser } from '../dbModels/interface';
import { getTrainerByUUID } from '../trainers/trainers.service';
import dayjs from 'dayjs';
import { sendConfirmBooking } from '../mail/mail.service';
import { findProgramByUUID, getAllPrograms } from '../servicePrograms/servicePrograms.service';

const userService = new UsersService();
export const SessionController = {
  async getAvailableTimeSlots(req: Request, res: Response) {
    try {
      const { trainerId, date } = req.body;
      const availableTimeSlots = await SessionService.getAvailableTimeSlots(
        trainerId,
        new Date(date),
      );
      res.json({
        code: 1,
        message: 'ok',
        data: availableTimeSlots,
      });
    } catch (e) {}
  },
  async bookSession(req: Request, res: Response) {
    try {
      const { programsUUID, trainerUUID, date, time, cusName, cusPhone, cusEmail } = req.body;
      console.log(' req.body');

      // Find user by email
      let user: IUser = await userService.findUserByEmail(cusEmail);

      // If user doesn't exist, create new user with type "newUser"
      if (!user) {
        const newUser: Partial<IUser> = {
          _id: undefined,
          account: undefined,
          address: '',
          avatar: '',
          birthday: undefined,
          createdAt: undefined,
          gender: '',
          role: 'customer',
          uuid: '',
          fullName: cusName,
          email: cusEmail,
          phone: cusPhone,
          type: 'new',
          introduction: '',
        };
        user = await userService.createUser(newUser);
      }

      // Get user UUID
      const cusUUID = `${user._id}`;
      user.uuid = cusUUID;
      await userService.updateUser(user._id.toString(), user);
      let trainerUUIDtoUse = trainerUUID;

      // If trainerUUID is specified, check if it's a valid trainer UUID
      if (trainerUUID) {
        const trainer = await getTrainerByUUID(trainerUUID);

        // If the specified trainerUUID is not a valid trainer UUID, throw an error
        if (!trainer) {
          throw new Error(`Invalid trainer UUID: ${trainerUUID}`);
        }

        // Use trainerUUID as the one to use for the ticket creation
        trainerUUIDtoUse = trainerUUID;
      }

      // Create ticket with the specified or default trainerUUID and customer UUID
      const ticket = await SessionService.createTicket(
        programsUUID,
        trainerUUIDtoUse,
        user._id,
        date,
        time,
      );
      console.log('starttime', ticket);
      console.log('starttime', dayjs(ticket.startTime).tz('Asia/Ho_Chi_Minh').toJSON());
      await sendConfirmBooking({
        email: cusEmail,
        name: cusName,
        bookingDate: dayjs(ticket.startTime).tz('Asia/Ho_Chi_Minh').toJSON(),
      });
      res.json({
        code: 1,
        message: 'ok',
        data: ticket,
      });
    } catch (e) {
      // Handle errors
      res.status(500).json({
        code: -1,
        message: e.message,
      });
    }
  },

  async getTicketsByCustomerUUID(req: Request, res: Response) {
    try {
      const customerUUID = req.params.customerUUID;
      console.log(' customerUUID', customerUUID);
      const tickets = await SessionService.getTicketsByCustomerUUID(customerUUID);

      if (!tickets) {
        return res.status(404).send({
          message: 'No tickets found for the given customer UUID',
        });
      }

      return res.send(tickets);
    } catch (error) {
      console.error(error);
      return res.status(500).send({ message: 'Internal server error' });
    }
  },

  async getTicketsByTrainerUUID(req: Request, res: Response) {
    try {
      const trainerUUID = req.params.trainerUUID;
      console.log(' trainerUUID', trainerUUID);
      const tickets = await SessionService.getTicketsByTrainerUUID(trainerUUID);

      if (!tickets) {
        return res.status(404).send({
          message: 'No tickets found for the given trainer UUID',
        });
      }

      return res.send(tickets);
    } catch (error) {
      console.error(error);
      return res.status(500).send({ message: 'Internal server error' });
    }
  },

  async getTickets(req: Request, res: Response) {
    try {
      const tickets = await SessionService.getTickets();

      if (!tickets) {
        return res.status(404).send({ message: 'No tickets found' });
      }

      return res.send(tickets);
    } catch (error) {
      console.error(error);
      return res.status(500).send({ message: 'Internal server error' });
    }
  },

  async getTicketByTicketUUID(req: Request, res: Response) {
    try {
      const uuid = req.params.ticketCode;
      console.log(' trainerUUID', uuid);
      let tickets;

      let user: IUser;
      let programs: IProgram[];

      if (uuid.includes('@gmail')) {
        user = await userService.findUserByEmail(uuid);
        if (user) tickets = await SessionService.getTicketsByCustomerUUID(`${user._id}`);
      } else if (uuid) {
        tickets = await SessionService.getTicketByTicketUUID(uuid);
      }

      if (!tickets) {
        return res.status(404).send({ message: 'No tickets found' });
      }

      // programs = await getAllPrograms()
      // tickets.forEach(e=>{
      //    if(e.programUUID){
      //        e["ProgramName"]= programs.filter(p=>p.uuid===e.programUUID)[0].serviceName
      //    }
      // })
      return res.send({ tickets: tickets, user: user });
    } catch (error) {
      console.error(error);
      return res.status(500).send({ message: 'Internal server error' });
    }
  },
};

import { Router } from 'express';
import { SessionController } from './session.controller';

const router = Router();

router.post('/available', SessionController.getAvailableTimeSlots);
router.post('/booking', SessionController.bookSession);
router.get('/tickets', SessionController.getTickets);

router.get('/ticketsStatistics', SessionController.getTicketStatisticsByDay);

//search ticket public user
router.get('/tickets/:ticketCode', SessionController.getTicketByTicketUUID);

router.post('/ticket/:ticketCode/confirm', SessionController.confirmTicket);
router.post('/ticket/:ticketCode/cancel', SessionController.cancelTicket);

router.get('/tickets/cus/:customerUUID/', SessionController.getTicketsByCustomerUUID);
router.get('/tickets/trainer/:trainerUUID', SessionController.getTicketsByTrainerUUID);

export default router;

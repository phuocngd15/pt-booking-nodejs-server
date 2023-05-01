import { Router } from 'express';
import { SessionController } from './session.controller';

const router = Router();

router.post('/available', SessionController.getAvailableTimeSlots);
router.post('/booking', SessionController.bookSession);
router.get('/tickets', SessionController.getTickets);
router.get('/tickets/:ticketCode', SessionController.getTicketByTicketUUID);
router.get('/tickets/cus/:customerUUID', SessionController.getTicketsByCustomerUUID);
router.get('/tickets/trainer/:trainerUUID', SessionController.getTicketsByTrainerUUID);

export default router;
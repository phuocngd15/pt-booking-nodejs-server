import { Router } from 'express';
import { SessionController } from './session.controller';

const router = Router();

router.post('/available', SessionController.getAvailableTimeSlots);

export default router;
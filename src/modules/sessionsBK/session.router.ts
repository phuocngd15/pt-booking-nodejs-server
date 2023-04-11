import { Router } from 'express';
import { SessionController } from './session.controller';

const router = Router();

router.get('/trainers/:trainerId/availability/:date', SessionController.getAvailableTimeSlots);

export default router;
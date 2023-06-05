/*
ToDo: router mau
import {Router} from 'express';
const router = Router();

router.post('/login', function);
router.post('/logout', function);

export default router;
*/

import { Router } from 'express';
import {
  getTrainersByGroupController,
  updateTrainerController,
  getTrainers,
  getTrainerById,
    addNewTrainer
} from './trainers.controller';
const router = Router();

router.get('/', getTrainers);
router.get('/:trainerId', getTrainerById);
router.post('/new', addNewTrainer);
router.post('/ids', getTrainerById);
router.post('/groups', getTrainersByGroupController);
router.post('/serviceId', getTrainersByGroupController);
router.put('/profile/:id', updateTrainerController);
// router.post('/logout', function);

export default router;

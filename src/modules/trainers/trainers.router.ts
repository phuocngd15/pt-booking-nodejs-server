/*
ToDo: router mau
import {Router} from 'express';
const router = Router();

router.post('/login', function);
router.post('/logout', function);

export default router;
*/

import { Router } from 'express';
import { getTrainersByGroupController, updateTrainerController,getTrainers } from './trainers.controller';
const router = Router();

router.get('/', getTrainers);
router.post('/groups', getTrainersByGroupController);
router.post('/serviceId', getTrainersByGroupController);
router.put('/profile/:id', updateTrainerController);
// router.post('/logout', function);

export default router;

/*
ToDo: router mau
import {Router} from 'express';
const router = Router();

router.post('/login', function);
router.post('/logout', function);

export default router;
*/

import {Router} from 'express';
import {getTrainersByGroupController} from "./trainers.controller";
const router = Router();

router.post('/groups', getTrainersByGroupController);
router.post('/serviceId', getTrainersByGroupController);

// router.post('/logout', function);

export default router;
import { Request, Response, Router } from 'express';
import {
  controllerGetActivitiesOfUser,
  controllerUpdateActivities,
} from './activitiesTask.controller';

const router = Router();
router.get('/user/:id/:state', controllerGetActivitiesOfUser);
router.put('/complete/:id', controllerUpdateActivities);

export default router;

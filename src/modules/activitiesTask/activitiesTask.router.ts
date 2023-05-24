import {Request, Response, Router} from 'express';
import {controllerGetActivities, controllerUpdateActivities} from "./activitiesTask.controller";

const router = Router();
router.get('/', controllerGetActivities);
router.put('/complete/:id', controllerUpdateActivities);

export default router;
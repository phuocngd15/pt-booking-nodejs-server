import { Router } from 'express';
import { getProgramDetailController, getAllProgramsController } from './servicePrograms.controller';

const router = Router();
//Todo: phd getProgramDetail
router.get('/', getAllProgramsController);
router.post('/serviceId', getProgramDetailController);

export default router;

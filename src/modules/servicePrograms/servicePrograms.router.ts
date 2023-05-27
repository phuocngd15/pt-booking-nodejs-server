import { Router } from 'express';
import {
  getProgramDetailController,
  getAllProgramsController,
  updateProgram,
} from './servicePrograms.controller';

const router = Router();
//Todo: phd getProgramDetail
router.get('/', getAllProgramsController);
router.put('/:id', updateProgram);
router.get('/:serviceID/trainers', getProgramDetailController);
router.post('/serviceId', getProgramDetailController);

export default router;

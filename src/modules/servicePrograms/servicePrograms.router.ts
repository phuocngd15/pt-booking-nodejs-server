import { Router } from 'express';
import {
  getProgramDetailController,
  getAllProgramsController,
  updateProgram,
  addNewProgram,
} from './servicePrograms.controller';

const router = Router();
//Todo: phd getProgramDetail
router.get('/', getAllProgramsController);
router.put('/:id', updateProgram);
router.get('/:serviceID/trainers', getProgramDetailController);
router.post('/serviceId', getProgramDetailController);
router.post('/new', addNewProgram);

export default router;

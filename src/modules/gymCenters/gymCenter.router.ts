import { Router } from 'express';
import gymCenterController from './gymCenter.controller';

const router = Router();

router.get('/', gymCenterController.getAllGymCenters);
router.get('/:id', gymCenterController.getGymCenter);
router.post('/', gymCenterController.createGymCenter);
router.put('/:id', gymCenterController.updateGymCenter);
router.delete('/:id', gymCenterController.deleteGymCenter);

export default router;

import express from 'express';
import { activityTaskController } from './activityTask.controller';

const router = express.Router();

// Create
router.post('/new', activityTaskController.createActivityTask);

// Read
router.get('/:id', activityTaskController.getActivityTask);
router.get('/', activityTaskController.getAllActivityTasks);
router.get('/user/:userId/state/:state', activityTaskController.getActivitiesByUserAndState);

// Update
router.put('/:id', activityTaskController.updateActivityTask);

// Delete
router.delete('/:id', activityTaskController.deleteActivityTask);

export default router;

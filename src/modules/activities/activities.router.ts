import express from 'express';
import { activityController } from './activities.controller';

const router = express.Router();

// Create
router.post('/new', activityController.createActivity);

// Read
router.get('/:id', activityController.getActivity);
router.get('/', activityController.getAllActivities);

// Update
router.put('/:id', activityController.updateActivity);

// Delete
router.delete('/:id', activityController.deleteActivity);

export default router;

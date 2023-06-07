import { IActivity } from '../dbModels/interface';
import ActivityModel from '../dbModels/activities.model';

export const activityService = {
  createActivity: async (activityData: IActivity) => {
    try {
      const result = await ActivityModel.create(activityData);
      return result
    }
    catch (e) {
      console.log(e)
    }

  },

  getActivity: async (activityId: string) => {
    const result = await ActivityModel.findById(activityId);
    return result
  },

  getAllActivities: async () => {
    const result = await ActivityModel.find();
    return result
  },

  updateActivity: async (activityId: string, activityData: IActivity) => {
    const result = ActivityModel.findByIdAndUpdate(activityId, activityData, { new: true });
    return result
  },

  deleteActivity: async (activityId: string) => {
    const result = ActivityModel.findByIdAndDelete(activityId);
    return result
  },
};

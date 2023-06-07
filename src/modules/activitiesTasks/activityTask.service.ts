import { IActivityTasks } from '../dbModels/interface';
import ActivityTaskModel from '../dbModels/activitiesTask.model';

export const activityTaskService = {
    createActivityTask: async (activityTaskData: IActivityTasks) => {
        try {
            return await ActivityTaskModel.create(activityTaskData);
        }
        catch (e) {
            console.log(e)
        }
    },

    getActivityTask: async (activityTaskId: string) => {
        return await ActivityTaskModel.findById(activityTaskId);
    },

    getAllActivityTasks: async () => {
        return await ActivityTaskModel.find();
    },

    updateActivityTask: async (activityTaskId: string, activityTaskData: IActivityTasks) => {
        try {
           const result=  await ActivityTaskModel.findByIdAndUpdate(activityTaskId, activityTaskData, { new: true });
            return result;
        }
        catch (e) {
            console.log(e)
        }
    },

    deleteActivityTask: async (activityTaskId: string) => {
        return await ActivityTaskModel.findByIdAndDelete(activityTaskId);
    },

    getActivitiesByUserAndState: async (userId: string, state: string) => {
        return await ActivityTaskModel.find({ user: userId, state: state }).populate(['user','createByTrainer','activityInfo']);
    },
};

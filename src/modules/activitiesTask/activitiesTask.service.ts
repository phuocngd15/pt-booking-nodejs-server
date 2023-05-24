import { IActivity} from "../dbModels/interface";
import activitiesTaskModel from "../dbModels/activitiesTask.model";

export default class ActivitiesTaskService{
    public async getAll(): Promise<IActivity[]> {
        const result = await activitiesTaskModel.find();
        return result;
    }
    public async completeOne(id,activity:IActivity ): Promise<IActivity> {
        const result = await activitiesTaskModel.findByIdAndUpdate(id, activity, { new: true }).exec();
        return result;
    }
}


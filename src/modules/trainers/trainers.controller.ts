import {generateTrainerData} from "./trainers.service";

const getTrainersByGroupController=async (req, res)=>{
    try {
        const { groupName } = req.body;
        console.log("groupName ",req.body )
        const data = generateTrainerData(10, groupName)
        const result ={
            data: data,
            code: 1,
            message: 'ok',
        }
         res.json(result);
    }
    catch (err) {

    }
}
export {
    getTrainersByGroupController
}
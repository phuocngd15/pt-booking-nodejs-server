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
// get trainers by 1 service class
const getTrainersByServiceIdController=async (req, res)=>{
    try {
        const {serviceId } = req.body;
        console.log("serviceId ",req.body )
        const data = generateTrainerData(10, serviceId)
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
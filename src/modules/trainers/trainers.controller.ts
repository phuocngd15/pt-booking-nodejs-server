import { findTrainerBySkills, getAllTrainers } from './trainers.service';

const getTrainersByGroupController = async (req, res) => {
  try {
    const { groupName } = req.body;
    console.log('groupName ', req.body);
    if (groupName === 'All') {
      console.log('getAllTrainers');
      const data = await getAllTrainers();
      const result = {
        data: data,
        code: 1,
        message: 'ok',
      };
      res.json(result);
    } else {
      console.log('findTrainerBySkills');
      const skillArray = Array.isArray(groupName) ? groupName : [groupName];
      console.log('skillArray', skillArray);
      const data = await findTrainerBySkills(skillArray);
      const result = {
        data: data,
        code: 1,
        message: 'ok',
      };
      res.json(result);
    }
  } catch (err) {}
};
// get trainers by 1 service class
// const getTrainersByServiceIdController=async (req, res)=>{
//     try {
//         const {serviceId } = req.body;
//         console.log("serviceId ",req.body )
//         const data = generateTrainerData(10, serviceId)
//         const result ={
//             data: data,
//             code: 1,
//             message: 'ok',
//         }
//          res.json(result);
//     }
//     catch (err) {
//
//     }
// }
export { getTrainersByGroupController };

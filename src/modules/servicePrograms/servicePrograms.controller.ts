import {findProgramByUUID,getAllPrograms} from "./servicePrograms.service";

import UsersService from "../users/users.service";
import {findTrainerByUUID} from "../trainers/trainers.service";


// const usersService = new UsersService()

const getProgramDetailController=async (req, res): Promise<void> =>{
    try {
        const { uuid } = req.body;
        console.log("uuid ",req.body )
        const program = await findProgramByUUID(uuid)
        console.log("program.responsibleEmployees",program.responsibleEmployees)
        const trainers = await findTrainerByUUID(program.responsibleEmployees)
        console.log("trainers",trainers)

        const result ={
            data: trainers,
            code: 1,
            message: 'ok',
        }
        res.json(result);
    }
    catch (err) {
        console.error(err);
    }
}
 const getAllProgramsController = async (req, res): Promise<void> => {
    try {
        const data = await getAllPrograms();
        const result ={
            data: data,
            code: 1,
            message: 'ok',
        }
        res.json(result);
    } catch (err) {
        console.error(err);
    }
};
export {
    getProgramDetailController,
    getAllProgramsController
}
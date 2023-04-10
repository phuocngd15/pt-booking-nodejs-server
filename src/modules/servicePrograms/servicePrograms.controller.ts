import {getProgramDetail, getPrograms} from "./servicePrograms.service";

const getProgramDetailController=async (req, res)=>{
    try {
        const { serviceId } = req.body;
        console.log("serviceId ",req.body )
        const data = getProgramDetail()
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
    getProgramDetailController
}
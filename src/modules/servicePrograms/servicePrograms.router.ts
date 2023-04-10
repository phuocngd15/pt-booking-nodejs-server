
import {Router} from 'express';
import {getProgramDetailController} from "./servicePrograms.controller";
const router = Router();

router.post('/serviceId', getProgramDetailController);


export default router;


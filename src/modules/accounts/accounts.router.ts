import {Router} from 'express';
import {getAll, getOne, createOne, updateOne, deleteOne} from "./accounts.controller";

const router = Router();

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', createOne);
router.put('/:id', updateOne);
router.delete('/:id', deleteOne);

export default router;
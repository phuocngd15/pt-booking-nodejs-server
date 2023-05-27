import { Router } from 'express';
import { getAllV2, getOne, createOne, updateOne, deleteOne, getAll } from './accounts.controller';

const router = Router();

router.get('/', getAll);
router.get('/v2/', getAllV2);
router.get('/:id', getOne);
router.post('/', createOne);
router.put('/:id', updateOne);
router.delete('/:id', deleteOne);

export default router;

import { Request, Response ,Router } from 'express';
import AccountService from './account.service';

const router = Router();
const accountService = new AccountService();

router.get('/', async (req: Request, res: Response) => {
    const accounts = await accountService.getAll();
    res.json(accounts);
});

router.get('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const account = await accountService.getById(id);
    if (!account) {
        res.status(404).send('Account not found');
    } else {
        res.json(account);
    }
});

router.post('/', async (req: Request, res: Response) => {
    const account = req.body;
    const createdAccount = await accountService.create(account);
    res.json(createdAccount);
});

router.put('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const account = req.body;
    const updatedAccount = await accountService.update(id, account);
    if (!updatedAccount) {
        res.status(404).send('Account not found');
    } else {
        res.json(updatedAccount);
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const deleted = await accountService.delete(id);
    if (!deleted) {
        res.status(404).send('cannot delete account');
    }else {
        res.json(deleted);
    }
});

export default router;

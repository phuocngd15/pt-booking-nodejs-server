/*import { Request, Response,Router } from 'express';
import { body, validationResult } from 'express-validator';

const router = Router();
import  * as userService from './users.service';


const userValidationRules = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email format'),
    body('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long'),
];


router.get('/', async (req: Request, res: Response) => {
    try {
        const users = await userService.findAll();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req: Request, res: Response) => {
    try {
        const user = await userService.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});



router.get('/:id', async (req: Request, res: Response) => {
    try {
        const user = await userService.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.put('/:id', async (req: Request, res: Response) => {
    try {
        const user = await userService.update(req.params.id, req.body);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const user = await userService.remove(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


export default router;*/
import express from 'express';
import {
  createUserController,
  deletedUserController,
  getUserController,
  getUsersController,
  updateUserController,
} from './users.controller';
import { requireLogin } from '../../middlewares/authenication.middleware';

const userRouter = express.Router();

userRouter.get('/', getUsersController);
userRouter.get('/:id', getUserController);
userRouter.post('/', createUserController);
userRouter.put('/:id', updateUserController);
userRouter.delete('/:id', deletedUserController);

export { userRouter };

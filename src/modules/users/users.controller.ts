import {Request, Response} from "express";
import {getAllUsers, getUserById, createUser, updateUser, deleteUser} from "./users.service";
import {IUser} from "./users.model";


export const getUsersController = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await getAllUsers();
        res.json(users);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}


export const getUserController = async (req: Request, res: Response): Promise<void> => {
    console.log("req", req.params)
    try {
        const id = req.params.id;
        const user = await getUserById(id);
        if (!user) {
            res.status(404).json({message: 'User not found'});
        } else {
            res.status(200).json(user);
        }
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

export const createUserController = async (req: Request, res: Response): Promise<void> => {
    const user: IUser = req.body;
    const newUser = await createUser(user);
    res.json(newUser);
}

export const updateUserController = async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;
    const user: IUser = req.body;
    const updatedUser = await updateUser(id, user);
    res.json(updatedUser);
}

export const deletedUserController = async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;
    const deletedUser = await deleteUser(id);
    res.json(deletedUser);
}





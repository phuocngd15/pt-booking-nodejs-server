import {Router} from 'express';
import {verifyToken} from "../../middlewares/authenication.middleware";
export interface AsyncRouteType {
    path: string;
    id: string;
    children: AsyncRouteType[];
}
const router = Router();

const power = [
    {
        path: '/home',
        id: 'Home',
    },
    {
        path: '/nested',
        id: 'Nested',
        children: [
            {
                path: 'menu1',
                id: 'Menu1',
                children: [
                    {
                        path: 'menu1-1',
                        id: 'Menu1-1',
                    },
                    {
                        path: 'menu1-2',
                        id: 'Menu1-2',
                    },
                ],
            },
        ],
    },
];

const adminRoute = [
    {
        path: '/power',
        id: 'Power',
        children: [
            {
                path: 'use_list',
                id: 'UseList',
            },
        ],
    },
    {
        path: '/cus-management',
        id: 'CusManagement',
    },
    {
        path: '/pt-management',
        id: 'PTManagement',
    },
    {
        path: '/tickets-management',
        id: 'TicketsManagement',
    },
    {
        path: '/classRooms-management',
        id: 'ClassRoomsManagemen',
    },
    {
        path: '/timeSlot-management',
        id: 'TimeSlot ',
    },
];

export const getRoute = async (req, res, next) => {
    try {
        console.log("getRoute")
        const { name } = req.body;
        let result={};
        if (name == 'admin') {
            result={
                data: [...power, ...adminRoute],
                code: 1,
                message: 'ok',
            };
        } else if (name == 'test') {
            result={
                data: [...power],
                code: 1,
                message: 'ok',
            };
        } else {
            result={
                data: [],
                code: -1,
                message: 'Account error',
            };
        }
        res.json(result);
    }
    catch (err) {
        next(err)
    }

};
router.post('/getRouter' ,getRoute);

export default router;
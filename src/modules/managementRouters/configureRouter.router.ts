import { Router } from 'express';
import { verifyToken } from '../../middlewares/authenication.middleware';
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
const customerRoute = [
  {
    path: '/loggedCusHome',
    id: 'loggedCusHome',
  },
  {
    path: '/squatCounter',
    id: 'SquatCounter',
  },
  {
    path: '/booking',
    id: 'BookingsView',
  },
  {
    path: '/calendar',
    id: 'CusCalendar',
  },
  {
    path: '/profile',
    id: 'Profile',
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
    path: '/calendar',
    id: 'AdminCalendar',
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
  {
    path: '/accounts-management',
    id: 'AccountsManagement',
  },
  {
    path: '/gymCenter-Management',
    id: 'GymCenterManagement',
  },
  {
    path: '/adBooking',
    id: 'adBookingsView',
  },

];
const trainerRoute = [
  {
    path: '/calendar',
    id: 'TrainerCalendar',
  },
  {
    path: '/myCustomer',
    id: 'MyCustomer',
  },
  {
    path: '/profile',
    id: 'Profile',
  },
];
export const getRoute = async (req, res, next) => {
  try {
    console.log('getRoute');
    const { role } = req.body;
    let result = {};
    switch (role) {
      case 'admin':
        result = {
          data: [...power, ...adminRoute],
          code: 1,
          message: 'ok',
        };
        break;
      case 'trainer':
        result = {
          data: [...trainerRoute],
          code: 1,
          message: 'ok',
        };
        break;
      case 'customer':
        result = {
          data: [...customerRoute],
          code: 1,
          message: 'ok',
        };
        break;
      default:
        result = {
          data: [],
          code: -1,
          message: 'Account error',
        };
        break;
    }
    res.json(result);
  } catch (err) {
    next(err);
  }
};
router.post('/getRouter', getRoute);

export default router;

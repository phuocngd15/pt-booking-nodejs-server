import express from 'express';
import userRouter from '../modules/users/users.router';
import accountRouter from '../modules/accounts/accounts.router';
import { botAPI } from '../modules/chatbotTelegram/subscribeBotOne';

import trainersRouter from '../modules/trainers/trainers.router';
import serviceProgramsRouter from '../modules/servicePrograms/servicePrograms.router';
import sessionRouter from '../modules/sessionsBK/session.router';
import mailRouter from '../modules/mail/mail.router';
import authRouters from '../modules/authentication/auth.router';
import imagesRouter from '../modules/cloudinary/images.router';
import gymCenterRouter from '../modules/gymCenters/gymCenter.router';
import activitiesRouter from "../modules/activities/activities.router";
import activitiesTasksRouter from "../modules/activitiesTasks/activityTask.router";

const apis = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRouters,
  },
  {
    path: '/users',
    route: userRouter,
  },
  {
    path: '/accounts',
    route: accountRouter,
  },
  {
    path: '/botAPI',
    route: botAPI,
  },
  {
    path: '/trainers',
    route: trainersRouter,
  },
  {
    path: '/programs',
    route: serviceProgramsRouter,
  },
  {
    path: '/sessions',
    route: sessionRouter,
  },
  {
    path: '/mail',
    route: mailRouter,
  },
  {
    path: '/images',
    route: imagesRouter,
  },
  {
    path: '/activities',
    route: activitiesRouter,
  },
  {
    path: '/activitiesTasks',
    route: activitiesTasksRouter,
  },
  {
    path: '/gymCenters',
    route: gymCenterRouter,
  },
];

defaultRoutes.forEach((route) => {
  apis.use(route.path, route.route);
});

export default apis;

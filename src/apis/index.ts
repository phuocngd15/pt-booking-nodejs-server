import express from "express";
import {userRouter} from "../modules/users/users.router";
import accountRouter from "../modules/accounts/accounts.router";
import {botAPI} from "../modules/chatbotTelegram/subscribeBotOne";

import trainersRouter from "../modules/trainers/trainers.router";
import serviceProgramsRouter from "../modules/servicePrograms/servicePrograms.router";
import sessionRouter from "../modules/sessionsBK/session.router";
const apis = express.Router()

const defaultRoutes = [
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
        path: '/services',
        route: serviceProgramsRouter,
    },
    {
        path: '/sessions',
        route: sessionRouter,
    }
]

defaultRoutes.forEach((route) => {
    apis.use(route.path, route.route)

})

export default apis
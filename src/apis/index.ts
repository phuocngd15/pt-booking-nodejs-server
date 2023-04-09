import express from "express";
import {userRouter} from "../modules/users/users.router";
import accountRouter from "../modules/accounts/accounts.router";
import {botAPI} from "../modules/chatbotTelegram/subscribeBotOne";

import trainersRouter from "../modules/trainers/trainers.router";
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
    }
]

defaultRoutes.forEach((route) => {
    apis.use(route.path, route.route)

})

export default apis
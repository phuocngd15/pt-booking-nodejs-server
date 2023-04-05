import express from "express";
import {userRouter} from "../modules/users/users.router";
import accountRouter from "../modules/accounts/accounts.router";
import {botAPI} from "../modules/chatbotTelegram/subscribeBotOne";

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
    }
]

defaultRoutes.forEach((route) => {
    apis.use(route.path, route.route)

})

export default apis
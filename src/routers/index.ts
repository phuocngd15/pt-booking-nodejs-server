import express from "express";
import {userRouter} from "../modules/users/users.router";
import accountRouter from "../modules/accounts/account.router";

const router = express.Router()

const defaultRoutes = [
    {
        path: '/users',
        route: userRouter,
    },
    {
        path: '/accounts',
        route: accountRouter,
    }
]

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route)
})

export default router
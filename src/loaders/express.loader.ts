import express, {Request,Response } from "express";
import errorMiddleware from "../middlewares/error.middleware";
import usersRouter from "../modules/users/users.router";
import accountRouter from "../modules/accounts/account.router";
import {swaggerDocs} from "../modules/swagger/swaggerDocs";
import swaggerUi from 'swagger-ui-express';
import morgan from 'morgan'
import helmet from 'helmet'

export const App=()=>{
    const app = express()
    // set log request
    app.use(morgan('dev'))

    app.use(helmet())

    //app.use(loggerMiddleware);
    app.use(errorMiddleware);

    app.get('/', (req:Request, res:Response) => {
        res.send('Hello, World!');
    });
    app.use('/users', usersRouter);
    app.use('/account', accountRouter);

    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

    return app;
}
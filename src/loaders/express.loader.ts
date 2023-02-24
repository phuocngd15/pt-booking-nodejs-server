import express, {Request,Response } from "express";
import errorMiddleware from "../middlewares/error.middleware";
import {swaggerDocs} from "../modules/swagger/swaggerDocs";
import swaggerUi from 'swagger-ui-express';
import morgan from 'morgan'
import helmet from 'helmet'
import router from "../routers";
import loggerMiddleware from "../middlewares/logger.middleware";
import {sendMail} from "../modules/mail/mail.service";

const App=()=>{
    const app = express()
    // set log request
    app.use(morgan('dev'))

    app.use(helmet())

    app.get('/', (req:Request, res:Response) => {
        res.send('Server is running');
    });
    app.get('/send-mail', (req:Request, res:Response) => {
        sendMail()
    });
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

    app.use(process.env.RoutePrefix, router)
    app.use(errorMiddleware);

    return app;
}

export const StartApp = () => {
    const app = App();
    app.listen(process.env.APP_PORT, () => {
        console.log(`Server is listening on port ${process.env.APP_PORT}`);
    })
}
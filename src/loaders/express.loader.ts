import express, {Request,Response } from "express";
import errorMiddleware from "../middlewares/error.middleware";
import {swaggerDocs} from "../modules/swagger/swaggerDocs";
import swaggerUi from 'swagger-ui-express';
import morgan from 'morgan'
import helmet from 'helmet'
import router from "../routers";

const App=()=>{
    const app = express()
    // set log request
    app.use(morgan('dev'))

    app.use(helmet())

    //app.use(loggerMiddleware);
    app.use(errorMiddleware);

    app.get('/', (req:Request, res:Response) => {
        res.send('Server is running');
    });
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

    app.use(process.env.RoutePrefix, router)

    return app;
}

export const StartApp = () => {
    const app = App();
    app.listen(process.env.APP_PORT, () => {
        console.log(`Server is listening on port ${process.env.APP_PORT}`);
    })
}
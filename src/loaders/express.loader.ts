import express, {Request,Response } from "express";
import errorMiddleware from "../middlewares/error.middleware";
import {swaggerDocs} from "../modules/swagger/swaggerDocs";
import swaggerUi from 'swagger-ui-express';
import morgan from 'morgan'
import helmet from 'helmet'
import router from "../routers";
import loggerMiddleware from "../middlewares/logger.middleware";
import {sendMail} from "../modules/mail/mail.service";
import e from "express";
import {AuthorizeGmail, SaveTokenGMail} from "../modules/mail/mail.authorization";

const App=()=>{
    const app = express()
    // set log request
    app.use(morgan('dev'))

    app.use(helmet())

    app.get('/', (req:Request, res:Response) => {
        res.send('Server is running');
    });
    app.get('/auth-gmail', (req:Request, res:Response) => {
        AuthorizeGmail().then(e=> res.status(200 ).send("okey"));
    });
    app.get('/oauth2callback', (req:Request, res:Response) => {
        console.log("req.params",req.params)
        console.log("req.params",req.query)
        const {code}=req.query;
        if(code) SaveTokenGMail(code);
    });
    app.get('/send-mail',async (req:Request, res:Response) => {
        const options = {
            to: 'secoder79@gmail.com',
            cc: '',
            replyTo: '',
            subject: 'Hello Coder79 🚀',
            text: 'This email is sent from the command line',
            html: `<p>🙋🏻‍♀️  &mdash; This is a <b>test email</b> from <a href="https://digitalinspiration.com">Digital Inspiration</a>.</p>`,
            attachments: '',
            textEncoding: 'base64',
            headers: [
                { key: 'X-Application-Developer', value: 'Amit Agarwal' },
                { key: 'X-Application-Version', value: 'v1.0.0.2' },
            ],
        };
       await sendMail(options)
            .then(()=>res.status(200).send('email sended'))
            .catch(e=>{
                res.status(40).send('email sended');
                console.log("error send mail",e);
            });
    });
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

    app.use(process.env.RoutePrefix, router)
    app.use(errorMiddleware);

    return app;
}

export const StartApp = () => {
    const app = App();
    app.listen(process.env.APP_PORT, () => {
        console.log(`Server is listening on port http://localhost:${process.env.APP_PORT}`);
    })
}
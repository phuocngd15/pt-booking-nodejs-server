import express, {Request,Response } from "express";
import errorMiddleware from "../middlewares/error.middleware";
import {swaggerDocs} from "../modules/swagger/swaggerDocs";
import swaggerUi from 'swagger-ui-express';
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import router from "../apis";
import {sendMail} from "../modules/mail/mail.service";
import {AuthorizeGmail, SaveTokenGMail} from "../modules/mail/mail.authorization";

import bodyParser from "body-parser";
import authRouters from "../modules/authentication/_.router";
import managementRouters from "../modules/managementRouters/_.router";
import {verifyToken} from "../middlewares/authenication.middleware";

const App=()=>{
    const app = express()
    // set log request
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(morgan('dev'))
    const corsOptions = {
        origin: 'http://localhost:5173',
        optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    }

    app.use(cors());
    app.use(helmet())

    // app.use(function(req, res, next) {
    //     res.header("Access-Control-Allow-Origin", "*");
    //     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //     next();
    // });
    app.use('/', authRouters)
    app.use('/routers', verifyToken, managementRouters)
    // app.get('/', (req:Request, res:Response) => {
    //     res.send('Server is running');
    // });
    app.get('/auth-gmail', (req:Request, res:Response) => {
        AuthorizeGmail().then(e=> {
            console.log('AuthorizeGmail', e)
            res.status(200 ).send("okey")
        });
    });
    app.get('/auth/google/callback', (req:Request, res:Response) => {
        console.log("req.params",req.params)
        console.log("req.query",req.query)
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
                res.status(400).send('error send mail');
                console.log("error send mail",e);
            });
    });
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

    app.use(process.env.RoutePrefix, router)

    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send('Something broke!');
    });
    app.use(errorMiddleware);

    return app;
}

export const StartApp = () => {
    const app = App();
    app.set('view engine', 'ejs');

    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send('Something broke!');
    });
    app.listen(process.env.APP_PORT, () => {
        console.log(`Server is listening on port http://localhost:${process.env.APP_PORT}`);
    })
    return app;
}
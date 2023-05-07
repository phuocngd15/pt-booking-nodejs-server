import express, { Request, Response } from 'express';
import errorMiddleware from '../middlewares/error.middleware';
import { swaggerDocs } from '../modules/swagger/swaggerDocs';
import swaggerUi from 'swagger-ui-express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import router from '../apis';
import { sendMail } from '../modules/mail/mail.service';
import { AuthorizeGmail, SaveTokenGMail } from '../modules/mail/mail.authorization';

import bodyParser from 'body-parser';
import authRouters from '../modules/authentication/auth.router';
import managementRouters from '../modules/managementRouters/configureRouter.router';
import { verifyToken } from '../middlewares/authenication.middleware';

const App = () => {
  const app = express();
  // set log request
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(morgan('dev'));
  const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  };

  app.use(cors());
  app.use(helmet());

  app.get('/', (req: Request, res: Response) => {
    res.send('Server is running');
  });

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

  app.use('/routers', verifyToken, managementRouters);

  app.use(process.env.RoutePrefix, router);

  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
  app.use(errorMiddleware);

  return app;
};

export const StartApp = () => {
  const app = App();
  app.set('view engine', 'ejs');

  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
  app.listen(process.env.APP_PORT, () => {
    console.log(`Server is listening on port http://localhost:${process.env.APP_PORT}`);
  });
  return app;
};

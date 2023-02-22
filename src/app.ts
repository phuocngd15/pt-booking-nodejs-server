import express from 'express';
import swaggerUi from 'swagger-ui-express';
import usersRouter from './routers/users.router';
import hello from "./routers/hello.router";
import {swaggerDocs} from "./swaggerDocs";
import config from "./config";
/*import * as dotenv from 'dotenv';
dotenv.config();*/
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/api', (req, res) => {
    res.send('Open API');
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/users', usersRouter);
app.use('/hello', hello);

app.listen(config.port, () => {
    console.log(`Server is listening on port ${config.port}`);
});

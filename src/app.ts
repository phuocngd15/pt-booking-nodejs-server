import config from "./config";
import { connectDB } from './database/db';
import {App} from "./loaders/express.loader";

/*import * as dotenv from 'dotenv';
dotenv.config();*/

connectDB()
    .then(() => {
        const app = App()
        app.listen(config.port, () => {
            console.log(`Server is listening on port ${config.port}`);
        });
    })
    .catch((error) => console.error(error));

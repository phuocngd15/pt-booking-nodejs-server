import {StartApp} from "./loaders/express.loader";
import {ConnectDB} from "./loaders/database.loader";
import {LoadConfig} from "./config";
import {LoadWinston} from "./loaders/winston.loader";

LoadConfig()
    .then(LoadWinston)
    .then(ConnectDB)
    .then(StartApp)
    .catch((error) => console.log('Application is crashed: ' + error))


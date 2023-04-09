import {LoadConfig} from "./config";
import {ConnectDB} from "./loaders/database.loader";
import {LoadWinston} from "./loaders/winston.loader";
import {SeedingData} from "./seedData";
import {StartApp} from "./loaders/express.loader";
import {StarBot} from "./loaders/botOne.loader";

LoadConfig()
    .then(LoadWinston)
   // .then(ConnectDB)
   // .then(SeedingData)

    .then(StartApp)
    //.then((app)=>StarBot(app))
    .catch((error) => console.log('Application is crashed: ' + error))


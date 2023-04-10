import mongoose from 'mongoose';
import {Logger} from "../middlewares/winston.middleware";

const logger = new Logger(__filename)

import UsersModel, {collectionUser} from "../modules/users/users.model";
import AccountModel, {collectionAccount} from "../modules/accounts/accounts.model";
import ProgramModel, {collectionProgram} from "../modules/servicePrograms/servicePrograms.model";
import {accountSeedingData, userSeedingData, serviceProgramsSeedingData} from "./sample.data";

async function removeAllDataFromCollection(collectionName: string): Promise<void> {
    try {
        await mongoose.connection.db.collection(collectionName).deleteMany({});
        console.log(`All data removed from collection ${collectionName}`);
    } catch (error) {
        console.error(`Error removing data from collection ${collectionName}: ${error}`);
    }
}

export const SeedingData = async () => {
    try {
        await removeAllDataFromCollection(collectionAccount.toLowerCase());
        await removeAllDataFromCollection(collectionUser.toLowerCase());
        const accounts = await AccountModel.insertMany(accountSeedingData);
        accounts.forEach((e,index)=>{
            userSeedingData[index].account=e.id;
            serviceProgramsSeedingData[0].responsibleEmployees.push(e.id);
        })

        accounts.forEach((e,index)=>{
            userSeedingData[index].account=e.id;
        })

        await ProgramModel.insertMany(serviceProgramsSeedingData);

        logger.info('Data seeded successfully');
    } catch (e) {
        logger.error('error seeding data  ', e);
    }
}

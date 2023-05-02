import mongoose from 'mongoose';
import { Logger } from '../middlewares/winston.middleware';

const logger = new Logger(__filename);

import TrainersModel, {
  collectionName as collectionTrainer,
} from '../modules/dbModels/trainers.model';
import AccountModel, { collectionAccount } from '../modules/dbModels/accounts.model';
import ProgramModel, { collectionProgram } from '../modules/dbModels/servicePrograms.model';
import {
  accountSeedingData,
  userSeedingData,
  serviceProgramsSeedingData,
  SessionsAbleMockData,
} from './sample.data';
import SessionModel, {
  collectionName as collectionSession,
} from '../modules/dbModels/session.model';

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
    await removeAllDataFromCollection(collectionTrainer.toLowerCase());
    await removeAllDataFromCollection(collectionProgram.toLowerCase());
    await removeAllDataFromCollection(collectionSession.toLowerCase());

    const accounts = await AccountModel.insertMany(accountSeedingData);
    accounts.forEach((e, index) => {
      userSeedingData[index].account = e.id;
      userSeedingData[index].uuid = `trainer_${e.id}`;

      serviceProgramsSeedingData[0].responsibleEmployees.push(`trainer_${e.id}`);
    });

    accounts.forEach((e, index) => {
      userSeedingData[index].account = e.id;
    });
    SessionsAbleMockData.forEach((e) => {
      e.trainerUUID = userSeedingData[0].uuid;
    });
    await TrainersModel.insertMany(userSeedingData);
    await ProgramModel.insertMany(serviceProgramsSeedingData);
    await SessionModel.insertMany(SessionsAbleMockData);

    logger.info('Data seeded successfully');
  } catch (e) {
    logger.error('error seeding data  ', e);
  }
};

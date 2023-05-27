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
  trainerSeedingData,
  serviceProgramsSeedingData,
  userSeedingData,
  activitiesSeedingData,
} from './sample.data';
import SessionModel, {
  collectionName as collectionSession,
} from '../modules/dbModels/session.model';
import UsersModel, { collectionName as collectionUser } from '../modules/dbModels/users.model';
import ActivitiesTaskModel, {
  collectionName as collectionActivities,
} from '../modules/dbModels/activitiesTask.model';

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
    await removeAllDataFromCollection(collectionAccount);
    await removeAllDataFromCollection(collectionTrainer);
    await removeAllDataFromCollection(collectionProgram);
    await removeAllDataFromCollection(collectionSession);
    await removeAllDataFromCollection(collectionUser);
    await removeAllDataFromCollection(collectionActivities);

    const users = await UsersModel.insertMany(userSeedingData);
    const trainers = await TrainersModel.insertMany(trainerSeedingData);

    accountSeedingData[2].profile = users[0]._id; // customer account
    accountSeedingData[2].profileModel = 'users'; // customer account
    accountSeedingData[1].profile = trainers[2]._id; // trainer account
    accountSeedingData[1].profileModel = 'trainers'; // trainer account
    //add 3 account
    const accounts = await AccountModel.insertMany(accountSeedingData);

    // complete info trainer
    const dataTrainer1 = accounts[1];
    trainerSeedingData[0].account = dataTrainer1._id;
    trainerSeedingData[0].uuid = `${dataTrainer1._id}`;
    serviceProgramsSeedingData[0].responsibleEmployees.push(dataTrainer1._id);

    // SessionsAbleMockData.forEach((e) => {
    //   e.trainerUUID = trainerSeedingData[0].uuid;
    // });

    //userSeedingData[0].account = accounts[2].id;

    await ProgramModel.insertMany(serviceProgramsSeedingData);

    // add activities to user
    activitiesSeedingData[0].user = users[0].id;
    activitiesSeedingData[1].user = users[0].id;
    // who Trainer create activities for user
    activitiesSeedingData[0].createByTrainer = dataTrainer1.id;
    activitiesSeedingData[1].createByTrainer = dataTrainer1.id;

    await ActivitiesTaskModel.insertMany(activitiesSeedingData);

    logger.info('Data seeded successfully');
  } catch (e) {
    logger.error('error seeding data  ', e);
  }
};

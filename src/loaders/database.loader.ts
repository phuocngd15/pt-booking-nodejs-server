import mongoose from 'mongoose';
import process from 'process';
import { Logger } from '../middlewares/winston.middleware';
const logger = new Logger(__filename);

export const ConnectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION, {});
    logger.info(`MongoDB connected at port: ${process.env.DB_CONNECTION}`);
  } catch (error) {
    logger.error(`Error connecting to MongoDB: ${error}`);
  }
};

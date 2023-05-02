import merge from 'lodash.merge';
import * as process from 'process';
import path from 'path';
import * as dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

const state = process.env.STATE || 'dev';
//load .env file
dotenv.config({ path: path.join(process.cwd(), `/src/config/.env.${state}`) });

export const LoadConfig = async () =>
  merge({
    env: process.env.NODE_ENV,
    port: 3001,
    secrets: {
      jwt: process.env.JWT_SECRET,
      dbUrl: process.env.DATABASE_URL,
    },
  });

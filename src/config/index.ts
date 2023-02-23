import merge from 'lodash.merge';
import * as process from "process";
import path from "path";
import * as dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const state = process.env.STATE || 'dev'
//load .env file
dotenv.config({ path: path.join(process.cwd(), `/src/config/.env.${state}`) })

let envConfig
console.log(state)
envConfig = require(`./${state}`).default

export default merge({
    state,
    env:process.env.NODE_ENV,
    port:3001,
    secrets:{
        jwt:process.env.JWT_SECRET,
        dbUrl:process.env.DATABASE_URL
    }
},envConfig)
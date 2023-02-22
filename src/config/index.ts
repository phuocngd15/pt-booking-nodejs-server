import merge from 'lodash.merge';
import * as process from "process";

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const state = process.env.STATE || 'local'

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
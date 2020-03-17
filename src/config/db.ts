import {Sequelize} from 'sequelize'
import { Logger } from '@overnightjs/logger';
// require('dotenv').config()
import * as dotenv from 'dotenv'
dotenv.config()
Logger.Info(process.env.DB_USERNAME)
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "mysql",
    timezone: '+07:00'
});

sequelize.authenticate().then(() => {
    Logger.Info("Connection has been estabilished")
}).catch(err => {
    Logger.Err("Unable to connect"+err)
})

export default sequelize
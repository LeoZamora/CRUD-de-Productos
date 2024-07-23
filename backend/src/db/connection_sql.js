import config from '../config.js'
import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(config.dbDatabase,config.dbUser,config.dbPassword, {
    host: config.dbServer,
    dialect: 'mysql'
});

const getMysqlConnection = ()=> {
    return sequelize;
}

export {getMysqlConnection}
import {DataSource} from "typeorm";
import {MysqlConnectionOptions} from "typeorm/driver/mysql/MysqlConnectionOptions";

const dotenv = require('dotenv').config();

const dataSourceOptionsTaller: MysqlConnectionOptions = {
  type: 'mysql',
  database: process.env.DB_HOST,
  host: process.env.DB_PORT,
  username: process.env.DB_NAME,
  password: process.env.DB_USERNAME,
  logging: true,
  debug: true,
}

const dataSourceDockerMySQL: MysqlConnectionOptions = {
  type: 'mysql',
  database: "disenio",
  host: "localhost",
  username: "root",
  password: "disenio",
  port: 3306,
  logging: true,
  synchronize: true,
  entities: [
    "entity/*.js"
  ],
}

const dataSourceOptionsHeroku: MysqlConnectionOptions = {
  type: 'mysql',
  url: process.env.HEROKU_DB_URL,
  logging: true,
  synchronize:true
}

export const dataSourceHeroku = new DataSource(dataSourceOptionsHeroku);
export const dataSourceTaller = new DataSource(dataSourceOptionsTaller);
export const dataSourceDocker = new DataSource(dataSourceDockerMySQL);
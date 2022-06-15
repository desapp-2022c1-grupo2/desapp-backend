import {DataSource} from "typeorm";
import {MysqlConnectionOptions} from "typeorm/driver/mysql/MysqlConnectionOptions";

const dotenv = require('dotenv').config();


const dataSourceOptionsTaller: MysqlConnectionOptions = {
  type: 'mariadb',
  database:  process.env.DB_NAME,
  host:  process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT as unknown as number,
}

export const dataSourceTaller = new DataSource(dataSourceOptionsTaller);
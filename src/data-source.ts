import {DataSource} from "typeorm";
import {MysqlConnectionOptions} from "typeorm/driver/mysql/MysqlConnectionOptions";

const dotenv = require('dotenv').config();

const dataSourceOptionsTaller: MysqlConnectionOptions = {
  type: 'mysql',
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT),
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
  type: 'mariadb',
  url: process.env.HEROKU_DB_URL
}

export const dataSourceHeroku = new DataSource(dataSourceOptionsHeroku);
export const dataSourceTaller = new DataSource(dataSourceDockerMySQL);
export const dataSourceDocker = new DataSource(dataSourceDockerMySQL);


export const createConnection = async (connectionDataSource: DataSource) => {
  await connectionDataSource.initialize()
    .then(() => {
      console.log("Data source initialized. Database used => ", connectionDataSource.options.database)
    })
    .catch((err) => {
      console.error("Cannot initialize data source => ", err)
    })
};
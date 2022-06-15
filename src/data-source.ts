import {DataSource} from "typeorm";
import {MysqlConnectionOptions} from "typeorm/driver/mysql/MysqlConnectionOptions";

const dotenv = require('dotenv').config();

const dataSourceOptionsTaller: MysqlConnectionOptions = {
  type: 'mysql',
  url:'http://dbadm.www.com.ar/',
  database: 'wca62414_db3',
  host: '192.168.186.175',
  username: 'wca62414_user',
  password: 'pde2021fadu',
  port: 3306,
  logging:true
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
  url: 'mysql://ew063rqmubjow6q4:efhn2smlvy5ziug3@cxmgkzhk95kfgbq4.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/kd7tvzyzw7trd0zc',
  database:'kd7tvzyzw7trd0zc',
  host: 'cxmgkzhk95kfgbq4.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  username: 'ew063rqmubjow6q4',
  password: 'efhn2smlvy5ziug3',
  logging: true,
  synchronize:true
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
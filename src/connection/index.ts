import {DataSource} from "typeorm";

export const createConnection: (connectionDataSource: DataSource) => Promise<DataSource> = async (connectionDataSource: DataSource) => {
  return connectionDataSource.initialize();
};

export const validateConnection = (connectionDataSource) => {
  createConnection(connectionDataSource).then((ds) => {
    console.log("Data source initialized. Database used => ", ds.options);
  }).catch((err) => {
    console.log("Couldn't initialize", err)
  })
}
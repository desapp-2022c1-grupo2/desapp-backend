import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        url: process.env.HEROKU_DB_URL,
        logging: true,
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        database: process.env.DB_HOST,
        host: process.env.DB_PORT,
        username: process.env.DB_NAME,
        password: process.env.DB_USERNAME,
        logging: true,
        debug: true,
      });
      return dataSource.initialize();
    },
  },
];

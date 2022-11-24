import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

function typeormModuleOptions(): TypeOrmModuleOptions {
  return {
    type: 'mariadb',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [join(__dirname, '../**/**/*entity{.ts,.js}')],
    autoLoadEntities: true,

    /**
     * Implementacion de las migraciones
     */
    migrationsRun: true,
    migrations: [join(__dirname, '../migration/**/*{.ts,.js}')],
    migrationsTableName: 'migrations_typeorm',

<<<<<<< HEAD
    /**
     * Activar solo en desarrollo
     */
    synchronize: false,
    logging: true,
    logger: 'file',
  };
=======

        /**
     * Activar solo en desarrollo
     */
        synchronize: false,
        logging: true,
        logger: 'file',
    }

>>>>>>> 82b6e76c5accc5331927903bd0d459fa80e2a495
}

export default registerAs('database', () => ({
  config: typeormModuleOptions(),
}));

import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

function typeormModuleOptions(): TypeOrmModuleOptions {
  return {
    type: 'mariadb',
    host:process.env.DATABASE_HOST_HEROKU,
    port: parseInt(process.env.DATABASE_PORT_HEROKU, 10),
    username: process.env.DATABASE_USER_HEROKU,
    password: process.env.DATABASE_PASSWORD_HEROKU,
    database: process.env.DATABASE_NAME_HEROKU,
    entities: [join(__dirname, '../**/**/*entity{.ts,.js}')],
    autoLoadEntities: true,

    /**
     * Implementacion de las migraciones
     */
    migrationsRun: true,
    migrations: [join(__dirname, '../migration/**/*{.ts,.js}')],
    migrationsTableName: 'migrations_typeorm',


        /**
         * Activar solo en desarrollo
         */
        synchronize: false,
        logging: true,
        logger: 'file',
    }
}

export default registerAs('database', () => ({
  config: typeormModuleOptions(),
}));

import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';


function typeormModuleOptions(): TypeOrmModuleOptions {
    return {
        type: 'postgres',
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


        /**
         * Activar solo en desarrollo
         */
        synchronize: true,
        logging: true,
        logger: 'file',

    }
}

export default registerAs('database', () => ({
    config: typeormModuleOptions()
}));
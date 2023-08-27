import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

function typeormModuleOptions(): TypeOrmModuleOptions {
  return {
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    port: Number(process.env.DATABASE_PORT),    
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
    logger: 'advanced-console',
  };
}

export default registerAs('database', () => ({
  config: typeormModuleOptions(),
}));

import {TypeOrmModuleOptions} from "@nestjs/typeorm";
import {registerAs} from "@nestjs/config";
import { join } from 'path'

function typeOrmModuleOptions(): TypeOrmModuleOptions {
    return {
        type: 'mysql',
        host: process.env.MYSQL_HOST,
        port: parseInt(process.env.MYSQL_PORT),
        username:process.env.MYSQL_USER,
        password:process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        entities:[join(__dirname + '../**/**/*entity{.ts,.js}')],
        autoLoadEntities: true,

        /**
         * Implementacion de las migraciones
         */
        migrations:[ join(__dirname, '../migrations/**/*{.ts,.js}')],
        migrationsTableName: 'migrations_typeorm',
        migrationsRun: true,

        /**
         * Activar solo en dev si es necesario
         */
        synchronize: false,
        logging: true,
        logger:'file'
    }

}

export default registerAs('database', () => ({
    config: typeOrmModuleOptions()
}))
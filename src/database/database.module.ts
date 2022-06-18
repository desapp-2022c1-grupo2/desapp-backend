import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ConfigModule, ConfigService} from "@nestjs/config";

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                type: 'mysql',
                //url: configService.get(''),
                host: configService.get('HEROKU_HOST'),
                port: configService.get('HEROKU_PORT'),
                username: configService.get('HEROKU_USER'),
                password: configService.get('HEROKU_PASSWORD'),
                database: configService.get('HEROKU_DB'),
                entities: [
                    __dirname + '/../**/*.entity.ts',
                ],
                synchronize: true,
            })
        }),
    ],
})
export class DatabaseModule {}

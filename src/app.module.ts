import {TypeOrmModule, TypeOrmModuleOptions} from "@nestjs/typeorm";
import {ConfigModule, ConfigService} from "@nestjs/config";
import * as Joi from "@hapi/joi";
import { Module } from '@nestjs/common';

import {StudentModule, AdminModule, CourseModule, JtpModule} from './modules';

import {TYPEORM_CONFIG} from "./config";

import databaseConfig from "./config/database.config"
import {AssignmentModule} from "./modules/assignment/tp.module";

@Module({
  imports: [
      TypeOrmModule.forRootAsync({
          inject:[ConfigService],
          useFactory: (config: ConfigService) =>
              config.get<TypeOrmModuleOptions>(TYPEORM_CONFIG)
      }),
      ConfigModule.forRoot({
         isGlobal: true,
          load: [databaseConfig],
         envFilePath: `.env.${ process.env.NODE_ENV || 'development'}`, // default apunta a .env.development
         validationSchema: Joi.object({
             NODE_ENV: Joi.string()
                 .valid('development', 'production', 'testing')
                 .default('development')

         })
      }),
      JtpModule,
      StudentModule,
      AssignmentModule,
      AdminModule,
      CourseModule,
  ] ,
})
export class AppModule {}

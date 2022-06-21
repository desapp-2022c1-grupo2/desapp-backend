import {TypeOrmModule, TypeOrmModuleOptions} from "@nestjs/typeorm";
import {ConfigModule, ConfigService} from "@nestjs/config";
import * as Joi from "@hapi/joi";
import { Module } from '@nestjs/common';

import { StudentModule } from './student/student.module';
import { AssignmentModule } from './assignment/assignment.module';
import { AdminModule } from './admin/admin.module';

import {TYPEORM_CONFIG} from "./config/const";

import databaseConfig from "./config/database.config";
import {JtpModule} from "./jtp/jtp.module";



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
         envFilePath: `.env.${ process.env.NODE_ENV || 'production'}`, // default apunta a .env.development
         validationSchema: Joi.object({
             NODE_ENV: Joi.string()
                 .valid('development', 'production', 'testing')
                 .default('production')

         })
      }),
      JtpModule,
      StudentModule,
      AssignmentModule,
      AdminModule
  ] ,
})
export class AppModule {}

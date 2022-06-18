import { Module } from '@nestjs/common';

import * as Joi from '@hapi/joi';

import { StudentModule } from './student/student.module';
import { AssignmentModule } from './assignment/assignment.module';
import {ConfigModule} from "@nestjs/config";
import { DatabaseModule } from './database/database.module';
import { AdminModule } from './admin/admin.module';


@Module({
  imports: [
      ConfigModule.forRoot({
          validationSchema: Joi.object({        // valida el formato de las credenciales
              //HEROKU_URL: Joi.string().required(),
              HEROKU_HOST: Joi.string().required(),
              HEROKU_PORT: Joi.number().required(),
              HEROKU_USER: Joi.string().required(),
              HEROKU_PASSWORD: Joi.string().required(),
              HEROKU_DB: Joi.string().required(),
              PORT: Joi.number(),
          })
      }),
      StudentModule,
      AssignmentModule,
      DatabaseModule,
      AdminModule
  ] ,
})
export class AppModule {}

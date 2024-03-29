import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import {Module} from '@nestjs/common';

import {
  AdminModule,
  AssignmentModule,
  CourseModule,
  JtpModule,
  StudentModule,
} from './modules';

import { TYPEORM_CONFIG } from './config';

import databaseConfig from './config/database.config';
import {AuthModule, JwtAuthGuard} from './auth';
import {AppController} from './app.controller';
import { APP_GUARD } from '@nestjs/core';
import { AssignmentSubmittedModule } from './modules/assignment_submitted/assignment_submitted.module';
import { EvaluationsModule } from './modules';
import { MailModule } from './modules/mail';
import { PasswordResetModule } from './modules/passwordReset/passwordReset.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) =>
        config.get<TypeOrmModuleOptions>(TYPEORM_CONFIG),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
      envFilePath: [`.env`, `.env.development`, `.env.${process.env.NODE_ENV}`],
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'testing')
          .default('development'),
      }),
    }),
    JtpModule,
    StudentModule,
    AssignmentModule,
    AdminModule,
    CourseModule,
    AuthModule,
    AssignmentSubmittedModule,
    EvaluationsModule,
    MailModule,
    PasswordResetModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}

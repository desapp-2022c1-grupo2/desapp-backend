import { Module } from '@nestjs/common';
import { StudentModule } from './student/student.module';
import { AssignmentModule } from './assignment/assignment.module';
import { AdminModule } from './admin/admin.module';
import {TypeOrmModule, TypeOrmModuleOptions} from "@nestjs/typeorm";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {TYPEORM_CONFIG} from "./config/const";


@Module({
  imports: [
      TypeOrmModule.forRootAsync({
          inject:[ConfigService],
          useFactory: (config: ConfigService) =>
              config.get<TypeOrmModuleOptions>(TYPEORM_CONFIG)
      }),
      ConfigModule.forRoot({
         isGlobal: true,
         envFilePath: '.env',
      }),
      StudentModule,
      AssignmentModule,
      AdminModule
  ] ,
})
export class AppModule {}

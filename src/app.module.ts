import { Module } from '@nestjs/common';
import { StudentModule } from './student/student.module';
import { AssignmentModule } from './assignment/assignment.module';
import { AdminModule } from './admin/admin.module';
import {TypeOrmModule} from "@nestjs/typeorm";


@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username:'admin',
          password:'password',
          database:'test',
          entities:[__dirname + './**/**/*entity{.ts,.js}'],
          autoLoadEntities: true,
          synchronize:true,
          logging: true
      }),
      StudentModule,
      AssignmentModule,
      AdminModule
  ] ,
})
export class AppModule {}

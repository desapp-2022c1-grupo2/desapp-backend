import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { AssignmentModule } from './assignment/assignment.module';
import {JtpModule} from "./jtp/jtp.module";

@Module({
  imports: [JtpModule, StudentModule, AssignmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

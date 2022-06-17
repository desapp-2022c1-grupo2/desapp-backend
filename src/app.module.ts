import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { AssignmentModule } from './assignment/assignment.module';

@Module({
  imports: [StudentModule, AssignmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

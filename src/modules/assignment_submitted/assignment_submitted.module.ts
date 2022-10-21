import { Module } from '@nestjs/common';
import { AssignmentSubmittedService } from './assignment_submitted.service';
import { AssignmentSubmittedController } from './assignment_submitted.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssignmentSubmitted } from './entities';
import {Student, StudentService} from "../student";

@Module({
  imports: [TypeOrmModule.forFeature([AssignmentSubmitted, Student])],
  controllers: [AssignmentSubmittedController],
  providers: [AssignmentSubmittedService, StudentService],
})
export class AssignmentSubmittedModule {}

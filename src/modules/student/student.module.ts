import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities';
import {Course, CourseService} from "../course";

@Module({
  imports: [TypeOrmModule.forFeature([Student, Course])],
  controllers: [StudentController],
  providers: [StudentService, CourseService],
})
export class StudentModule {}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import {BaseController} from "../../commons/controller.commons";
import {Student} from "./entities/student.entity";
import { BaseService } from 'src/commons/service.commoms';
import {AdminService} from "../admin/admin.service";
import {Admin} from "../admin/entities/admin.entity";

@Controller('students')
export class StudentController extends BaseController<Student> {

  constructor( private readonly studentService: StudentService ) {
    super()
  }

  getService(): BaseService<Student> {
    return this.studentService
  }

}

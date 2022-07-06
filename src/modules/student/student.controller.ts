import { Controller} from '@nestjs/common';
import { StudentService } from './student.service';

import {BaseController} from "../../commons/controller.commons";
import {Student} from "./entities/student.entity";
import { BaseService } from 'src/commons/service.commoms';

@Controller('students')
export class StudentController extends BaseController<Student> {

  constructor( private readonly studentService: StudentService ) {
    super()
  }

  getService(): BaseService<Student> {
    return this.studentService
  }

}

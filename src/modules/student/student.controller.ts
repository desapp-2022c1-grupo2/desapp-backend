import { Controller, Get } from '@nestjs/common';
import { StudentService } from './student.service';
import { BaseController } from '../../commons';
import { Student } from './entities';
import { BaseService } from 'src/commons/service.commons';

@Controller('student')
export class StudentController extends BaseController<Student> {
  constructor(private readonly studentService: StudentService) {
    super();
  }

  getService(): BaseService<Student> {
    return this.studentService;
  }

  @Get('count')
  async countAll(): Promise<number> {
    return this.studentService.countAll();
  }
}

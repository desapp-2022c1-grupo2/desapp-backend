import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { BaseController, BaseService } from '../../commons';
import { Evaluation } from './entities';
import { EvaluationsService } from './evaluations.service';
import { Student } from '../student';

@Controller('evaluation')
export class EvaluationsController extends BaseController<Evaluation> {
  constructor(private readonly evaluationsService: EvaluationsService) {
    super();
  }

  getService(): BaseService<Evaluation> {
    return this.evaluationsService;
  }

  @Get('/:id/student')
  @HttpCode(HttpStatus.OK)
  async getStudentEval(@Param('id') id: number): Promise<Student> {
    const evaluation: Evaluation = await this.getService().findOne(id);
    return evaluation.student;
  }
}

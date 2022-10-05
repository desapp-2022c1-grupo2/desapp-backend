import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { AssignmentSubmittedService } from './assignment_submitted.service';

@Controller('assignment_submitted')
export class AssignmentSubmittedController {
  constructor(
    private readonly assignmentSubmittedService: AssignmentSubmittedService,
  ) {}

  @Get('count')
  @HttpCode(HttpStatus.OK)
  async countAllAssignmentSubmitted(): Promise<number> {
    return await this.assignmentSubmittedService.countAllAssignmentSubmitted();
  }
}

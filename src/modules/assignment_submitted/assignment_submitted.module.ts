import { Module } from '@nestjs/common';
import { AssignmentSubmittedService } from './assignment_submitted.service';

@Module({
  providers: [AssignmentSubmittedService],
})
export class AssignmentSubmittedModule {}

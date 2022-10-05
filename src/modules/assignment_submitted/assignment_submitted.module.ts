import { Module } from '@nestjs/common';
import { AssignmentSubmittedService } from './assignment_submitted.service';
import { AssignmentSubmittedController } from './assignment_submitted.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssigmentSubmittedEntity } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([AssigmentSubmittedEntity])],
  providers: [AssignmentSubmittedService],
  controllers: [AssignmentSubmittedController],
})
export class AssignmentSubmittedModule {}

import { Module } from '@nestjs/common';
import {AssignmentController} from './tp.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {AssignmentEntity} from "./entities/assignmentEntity";
import {AssignmentService} from "./tp.service";


@Module({
  imports: [TypeOrmModule.forFeature([AssignmentEntity])],
  controllers: [AssignmentController],
  providers: [AssignmentService]
})
export class AssignmentModule {}

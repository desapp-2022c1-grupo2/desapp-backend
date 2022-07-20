import { Module } from '@nestjs/common';
import {AssignmentController} from './assignment.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {AssignmentEntity} from "./entities";
import {AssignmentService} from "./assignment.service";


@Module({
  imports: [TypeOrmModule.forFeature([AssignmentEntity])],
  controllers: [AssignmentController],
  providers: [AssignmentService]
})
export class AssignmentModule {}

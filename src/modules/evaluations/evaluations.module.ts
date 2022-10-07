import { Module } from '@nestjs/common';
import { EvaluationsController } from './evaluations.controller';
import { EvaluationsService } from './evaluations.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Evaluations} from "./entities";

@Module({
  imports:[TypeOrmModule.forFeature([Evaluations])],
  controllers: [EvaluationsController],
  providers: [EvaluationsService],
})
export class EvaluationsModule {}

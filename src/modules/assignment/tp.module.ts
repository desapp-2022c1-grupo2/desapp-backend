import { Module } from '@nestjs/common';
import { TpController } from './tp.controller';
import { TpService } from './tp.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Assignment} from "./entities/assignment";


@Module({
  imports: [TypeOrmModule.forFeature([Assignment])],
  controllers: [TpController],
  providers: [TpService]
})
export class AssignmentModule {}

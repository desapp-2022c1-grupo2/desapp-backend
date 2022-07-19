import { Module } from '@nestjs/common';
import { TpController } from './tp.controller';
import { TpService } from './tp.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {TpEntiy} from "./entities/assignment";

@Module({
  imports: [TypeOrmModule.forFeature([TpEntiy])],
  controllers: [TpController],
  providers: [TpService]
})
export class TpModule {}

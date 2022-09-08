import { Module } from '@nestjs/common';
import { JtpService } from './jtp.service';
import { JtpController } from './jtp.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Jtp} from "./entities";

@Module({
  imports:[TypeOrmModule.forFeature([Jtp])],
  controllers: [JtpController],
  providers: [JtpService]
})
export class JtpModule {}

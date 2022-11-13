import { Module } from '@nestjs/common';
import { JtpService } from './jtp.service';
import { JtpController } from './jtp.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jtp } from './entities';
import {MailModule, MailService} from "../mail";

@Module({
  imports: [TypeOrmModule.forFeature([Jtp]), MailModule],
  controllers: [JtpController],
  providers: [JtpService],
  exports: [JtpService],
})
export class JtpModule {}

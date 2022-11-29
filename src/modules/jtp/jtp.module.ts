import { Module } from '@nestjs/common';
import { JtpService } from './jtp.service';
import { JtpController } from './jtp.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jtp } from './entities';
import {PasswordResetModule} from "../passwordReset/passwordReset.module";

@Module({
  imports: [TypeOrmModule.forFeature([Jtp]), PasswordResetModule],
  controllers: [JtpController],
  providers: [JtpService],
  exports: [JtpService],
})
export class JtpModule {}

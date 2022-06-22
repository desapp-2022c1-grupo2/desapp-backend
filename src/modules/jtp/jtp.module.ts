import { Module } from '@nestjs/common';
import { JtpService } from './jtp.service';
import { JtpController } from './jtp.controller';

@Module({
  controllers: [JtpController],
  providers: [JtpService]
})
export class JtpModule {}

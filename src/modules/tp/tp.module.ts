import { Module } from '@nestjs/common';
import { TpController } from './tp.controller';
import { TpService } from './tp.service';

@Module({
  controllers: [TpController],
  providers: [TpService]
})
export class TpModule {}

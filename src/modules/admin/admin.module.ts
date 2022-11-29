import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './entities';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import {PasswordResetModule} from "../passwordReset/passwordReset.module";

@Module({
  imports: [TypeOrmModule.forFeature([Admin]), PasswordResetModule],
  controllers: [AdminController],
  providers: [AdminService],
  exports: [AdminService],
})
export class AdminModule {}

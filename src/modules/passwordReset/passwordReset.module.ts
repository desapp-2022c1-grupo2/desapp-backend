import {Module} from '@nestjs/common';
import {PasswordResetService} from './passwordReset.service';
import {PasswordResetController} from './passwordReset.controller';
import {Jtp, JtpModule} from "../jtp";
import {Admin, AdminModule} from "../admin";
import {TypeOrmModule} from "@nestjs/typeorm";
import {PasswordReset} from "./entities";
import {MailModule} from "../mail";

@Module({
  controllers: [PasswordResetController],
  providers: [PasswordResetService],
  exports: [PasswordResetService],
  imports:[TypeOrmModule.forFeature([PasswordReset]), JtpModule, AdminModule, MailModule],

})
export class PasswordResetModule {}

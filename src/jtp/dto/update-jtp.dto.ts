import { PartialType } from '@nestjs/mapped-types';
import { CreateJtpDto } from './create-jtp.dto';

export class UpdateJtpDto extends PartialType(CreateJtpDto) {}

import { Injectable } from '@nestjs/common';
import { CreateJtpDto } from './dto/create-jtp.dto';
import { UpdateJtpDto } from './dto/update-jtp.dto';

@Injectable()
export class JtpService {
  create(createJtpDto: CreateJtpDto) {
    return 'This action adds a new jtp';
  }

  findAll() {
    return `This action returns all jtp`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jtp`;
  }

  update(id: number, updateJtpDto: UpdateJtpDto) {
    return `This action updates a #${id} jtp`;
  }

  remove(id: number) {
    return `This action removes a #${id} jtp`;
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JtpService } from './jtp.service';
import { CreateJtpDto } from './dto/create-jtp.dto';
import { UpdateJtpDto } from './dto/update-jtp.dto';

@Controller('jtp')
export class JtpController {
  constructor(private readonly jtpService: JtpService) {}

  @Post()
  create(@Body() createJtpDto: CreateJtpDto) {
    return this.jtpService.create(createJtpDto);
  }

  @Get()
  findAll() {
    return this.jtpService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jtpService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJtpDto: UpdateJtpDto) {
    return this.jtpService.update(+id, updateJtpDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jtpService.remove(+id);
  }
}

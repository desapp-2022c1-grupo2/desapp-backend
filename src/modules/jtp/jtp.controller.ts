import {Body, Controller, HttpCode, HttpStatus, Param, Post} from '@nestjs/common';
import { JtpService } from './jtp.service';
import { BaseController } from '../../commons';
import { Jtp } from './entities';

@Controller('jtp')
export class JtpController extends BaseController<Jtp> {
  constructor(private readonly jtpService: JtpService) {
    super();
  }

  getService(): JtpService {
    return this.jtpService;
  }

  @Post(':id/resetPassword')
  @HttpCode(HttpStatus.OK)
  async resetPassword(@Param('id') id: any, @Body() dto: Jtp) {
    return await this.getService().resetPassword(id);
  }
}

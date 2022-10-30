import {Body, Controller, HttpCode, HttpStatus, Param, Post} from '@nestjs/common';
import { JtpService } from './jtp.service';
import { BaseController } from '../../commons';
import { Jtp } from './entities';

const sgMail = require('@sendgrid/mail')

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
    await this.sendMail('tomas.toloza@estudiantes.unahur.edu.ar');
    return await this.getService().resetPassword(id);
  }


  private async sendMail(receiverEmail) {
    sgMail.setApiKey("")
    const msg = {
      to: receiverEmail,
      from: 'tomas.toloza@estudiantes.unahur.edu.ar',
      subject: 'Reestablecimiento de contraseña | Diseño industrial UNAHUR',
      text: `reset para ${receiverEmail}`,
      html: '<div>\n    <p>Tu contraseña ha sido reestablecida por el administrador.</p>\n    <p>Tu nueva contraseña es: <code>changeme</code></p>\n</div>',
    }
    return await sgMail.send(msg)
  }
}

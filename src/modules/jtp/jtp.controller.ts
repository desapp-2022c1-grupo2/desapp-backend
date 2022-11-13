import {Controller} from '@nestjs/common';
import {JtpService} from './jtp.service';
import {BaseController} from '../../commons';
import {Jtp} from './entities';


@Controller('jtp')
export class JtpController extends BaseController<Jtp> {
  constructor(private readonly jtpService: JtpService) {
    super();
  }

  getService(): JtpService {
    return this.jtpService;
  }
}

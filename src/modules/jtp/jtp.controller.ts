import {Controller} from '@nestjs/common';
import {JtpService} from './jtp.service';
import {BaseController, BaseService} from "../../commons";
import {Jtp} from "./entities";

@Controller('jtp')
export class JtpController extends BaseController<Jtp> {

  constructor(private readonly jtpService: JtpService) {
    super()
  }

  getService(): BaseService<Jtp> {
    return this.jtpService;
  }

}

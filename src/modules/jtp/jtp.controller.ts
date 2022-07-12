import {Controller} from '@nestjs/common';
import {JtpService} from './jtp.service';
import {BaseController, BaseService} from "../../commons";
import {Jtp} from "./entities";
import {JoinColumn, ManyToOne} from "typeorm";
import {Assignment} from "../assignment";


@Controller('jtp')
export class JtpController extends BaseController<Jtp> {

  constructor(private readonly jtpService: JtpService) {
    super()
  }

  getService(): BaseService<Jtp> {
    return this.jtpService;
  }

  @ManyToOne( () => Assignment, (assignment) => assignment.name)
  @JoinColumn({ name: 'materia_id'})
  assignment: Assignment

}

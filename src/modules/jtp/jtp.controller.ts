import {Controller} from '@nestjs/common';
import {JtpService} from './jtp.service';
import {BaseController} from "../../commons/controller.commons";
import {Jtp} from "./entities/jtp.entity";
import {BaseService} from "../../commons/service.commoms";
import {JoinColumn, ManyToOne} from "typeorm";
import {Assignment} from "../assignment/entities/assignment.entity";

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



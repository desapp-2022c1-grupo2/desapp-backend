import { Controller} from '@nestjs/common';
import { AssignmentService } from './assignment.service';
import {BaseController} from "../../commons/controller.commons";
import {Assignment} from "./entities/assignment.entity";
import {BaseService} from "../../commons/service.commoms";

@Controller('assignments')
export class AssignmentController extends BaseController<Assignment>{
  constructor(private readonly assignmentService: AssignmentService) {
    super()
  }

  getService(): BaseService<Assignment> {
    return this.assignmentService
  }

}

import {Controller} from '@nestjs/common';
import {AssignmentService} from "./assignment.service";
import {Assignment} from "./entities";
import {BaseController, BaseService} from "../../commons";

@Controller('assignment')
export class AssignmentController extends BaseController<Assignment>{

    constructor( private readonly assignmentService: AssignmentService ) {
        super();
    }

    getService(): BaseService<Assignment> {
        return this.assignmentService;
    }
}

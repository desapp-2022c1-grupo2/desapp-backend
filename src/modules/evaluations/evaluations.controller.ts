import { Controller } from '@nestjs/common';
import {BaseController, BaseService} from "../../commons";
import {Evaluations} from "./entities";
import {EvaluationsService} from "./evaluations.service";

@Controller('evaluations')
export class EvaluationsController extends  BaseController<Evaluations>{
    constructor(private readonly evaluationsService: EvaluationsService) {
        super();
    }
    getService(): BaseService<Evaluations> {
        return this.evaluationsService
    }
}

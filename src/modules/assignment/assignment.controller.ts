import {Controller, Get, HttpCode, HttpStatus, Param} from '@nestjs/common';
import {AssignmentService} from "./assignment.service";
import {AssignmentEntity} from "./entities";

@Controller('tp')
export class AssignmentController {

    constructor(
        private readonly tpsService: AssignmentService
    ) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    async findAllTps(): Promise<AssignmentEntity[]>{
        return await this.tpsService.findAllTps()
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    async findByIdTp(
        @Param('id') id: number
    ): Promise <AssignmentEntity>{
        return await this.tpsService.findByIdTp(id)
    }

}

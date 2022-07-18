import {Controller, Get, HttpCode, HttpStatus, Param} from '@nestjs/common';
import {TpService} from "./tp.service";
import {TpEntiy} from "./entities/tp.entity";

@Controller('tp')
export class TpController {

    constructor(
        private readonly tpsService: TpService
    ) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    async findAllTps(): Promise<TpEntiy[]>{
        return await this.tpsService.findAllTps()
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    async findByIdTp(
        @Param('id') id: number
    ): Promise <TpEntiy>{
        return await this.tpsService.findByIdTp(id)
    }

}

import {Body, Controller, Get, HttpCode, HttpStatus, Param, ParseFloatPipe, Post} from '@nestjs/common';

import {AdminService} from "./admin.service";
import {Admin} from "./admin.entity";
import {CreatedAdminDto} from "./dto";

@Controller('admin')
export class AdminController {

    constructor( private readonly adminService: AdminService ) {}

    @Get()
    async getAllAdmin() {
        const data =await this.adminService.getAllAdmin()
        return {
            message: 'datos',
            data
        }
    }

    @Get('/:id')
    getOneAdmin(
        @Param('id', ParseFloatPipe) id: number
    )
    {
        return this.adminService.getOneAdmin(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    createdAdmin(
        @Body() dto: CreatedAdminDto ){
        return this.adminService.createdAdmin(dto)
    }
}

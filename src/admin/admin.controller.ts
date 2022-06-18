import {Body, Controller, Get, HttpCode, HttpStatus, Post} from '@nestjs/common';

import {AdminService} from "./admin.service";
import {Admin} from "./admin.entity";
import {CreatedAdminDto} from "./dto";

@Controller('admin')
export class AdminController {

    constructor(
        private readonly adminService: AdminService
    ) {}

    @Get()
    getAllAdmin(): Admin[] {
        return this.adminService.getAllAdmin()
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    createdAdmin(
        @Body() dto: CreatedAdminDto ): void {
        return this.adminService.createAdmin(dto)
    }
}

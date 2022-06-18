import {Body, Controller, Get, HttpCode, HttpStatus, Post} from '@nestjs/common';

import {AdminService} from "./admin.service";
import {Admin} from "./admin.entity";

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
        @Body('msg') message: string
    ): void {
        return this.adminService.createAdmin(message)
    }
}

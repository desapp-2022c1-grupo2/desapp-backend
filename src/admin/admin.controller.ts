import {Body, Controller, Get, HttpCode, HttpStatus, Post} from '@nestjs/common';
import * as Http from "http";

@Controller('admin')
export class AdminController {

    @Get()
    getAllAdmin(){
        return 'all admin'
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    createdAdmin(
        @Body('msg') message: string
    ): string {
        return 'create admin'
    }
}

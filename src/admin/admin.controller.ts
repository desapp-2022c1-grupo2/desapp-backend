import {Controller, Get} from '@nestjs/common';

@Controller('admin')
export class AdminController {

    @Get()
    getAllAdmin(){
        return 'all admin'
    }
}

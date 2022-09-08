import { Controller } from '@nestjs/common';

import {AdminService} from "./admin.service";
import {BaseController, BaseService} from "../../commons";
import {Admin} from "./entities";

@Controller('admin')
export class AdminController extends BaseController<Admin>{

    constructor( private readonly adminService: AdminService ) {
        super()
    }

    getService(): BaseService<Admin> {
        return this.adminService
    }


}

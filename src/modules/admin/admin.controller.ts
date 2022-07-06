import { Controller } from '@nestjs/common';

import {AdminService} from "./admin.service";
import {BaseController} from "../../commons/controller.commons";
import {BaseService} from "../../commons/service.commoms";
import {Admin} from "./entities/admin.entity";

@Controller('admin')
export class AdminController extends BaseController<Admin>{

    constructor( private readonly adminService: AdminService ) {
        super()
    }

    getService(): BaseService<Admin> {
        return this.adminService
    }


}

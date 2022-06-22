import {Injectable} from '@nestjs/common';
import {Repository} from "typeorm";
import {Admin} from "./admin.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {BaseService} from "../../commons/service.commoms";

@Injectable()
export class AdminService  extends BaseService<Admin> {

    constructor(
        @InjectRepository(Admin)
        private readonly adminRepository: Repository<Admin>
    ) { super() }

    getRepository(): Repository<Admin> {
        return this.adminRepository;
    }

}


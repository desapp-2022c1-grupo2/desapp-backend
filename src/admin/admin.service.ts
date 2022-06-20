import {Injectable, NotFoundException} from '@nestjs/common';
import {CreatedAdminDto} from "./dto";
import {Repository} from "typeorm";
import {Admin} from "./admin.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class AdminService {

    constructor(
        @InjectRepository(Admin)
        private readonly adminRepository: Repository<Admin>
    ) {}

   async getAllAdmin(): Promise<Admin[]> {
        return await this.adminRepository.find()
    }

    async getOneAdmin(id: number) {
        const admin =  await this.adminRepository.findOneBy({
            id
        })
        if(! admin ) throw new NotFoundException()

        return admin
    }

    async createdAdmin(dto: CreatedAdminDto) {
        const admin = this.adminRepository.create(dto as any)
        return await this.adminRepository.save(admin)
    }
}
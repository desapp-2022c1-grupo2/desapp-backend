import { Injectable } from '@nestjs/common';
import {Admin} from "./admin.entity";
import {CreatedAdminDto} from "./dto";

@Injectable()
export class AdminService {
    private admin: Admin[] = [
        {
            id: 1,
            name: 'adrian',
            lastName: 'Yaniri',
            rol: 'admin'
        }
    ]

    getAllAdmin(): Admin[]{
        return this.admin
    }

    createAdmin({ name,lastName,rol }: CreatedAdminDto){
        this.admin.push({
            id:(Math.floor(Math.random() * 2000) + 1),
            name,
            lastName,
            rol
        })

    }
}


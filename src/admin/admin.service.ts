import { Injectable } from '@nestjs/common';
import {Admin} from "./admin.entity";

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

    createAdmin(message: string){
        this.admin.push({
            id:(Math.floor(Math.random() * 2000) + 1),
            name:'Adrian',
            lastName: 'Yaniri',
            rol: 'estudiante'
        })

    }
}


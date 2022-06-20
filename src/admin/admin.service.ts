import { Injectable } from '@nestjs/common';
import {CreatedAdminDto} from "./dto";

@Injectable()
export class AdminService {

    getAllAdmin() {
        return {ok: 'get All'}
    }

    getOneAdmin(id: number) {
        return {ok: 'get one'}
    }

    createdAdmin(dto: CreatedAdminDto) {
        return dto


    }


}
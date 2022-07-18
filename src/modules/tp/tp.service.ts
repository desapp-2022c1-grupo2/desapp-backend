import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {TpEntiy} from "./entities/tp.entity";
import {Repository} from "typeorm";

@Injectable()
export class TpService {

    constructor(
        @InjectRepository(TpEntiy)
        private readonly tpsRepository: Repository<TpEntiy>
    ) {}

    async findAllTps(): Promise<TpEntiy[]> {
        return await this.tpsRepository.find()
    }
}

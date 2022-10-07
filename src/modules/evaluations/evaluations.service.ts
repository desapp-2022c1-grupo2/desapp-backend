import { Injectable } from '@nestjs/common';
import {BaseService} from "../../commons";
import {Evaluations} from "./entities";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class EvaluationsService extends BaseService<Evaluations>{
    constructor(
        @InjectRepository(Evaluations)
        private readonly evaluationsRepository: Repository<Evaluations>,
    ) {
        super()
    }

    async findOne(id: number): Promise<Evaluations> {
        return await this.getRepository().findOneBy({id});
    }

    getRepository(): Repository<Evaluations> {
        return this.evaluationsRepository;
    }

}

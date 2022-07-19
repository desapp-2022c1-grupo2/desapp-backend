import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {TpEntiy} from "./entities/assignment";
import {Repository} from "typeorm";

@Injectable()
export class TpService {

    constructor(
        @InjectRepository(TpEntiy)
        private readonly tpsRepository: Repository<TpEntiy>
    ) {}

    async findAllTps(): Promise<TpEntiy[]> {
        const data = await this.tpsRepository.find()

        if(! data) throw new NotFoundException('Error: does not exist data')

        return data
    }

    async findByIdTp(id: number): Promise<TpEntiy>{
        const data =  await this.tpsRepository.findOneBy({id} )

        if(! data) throw new NotFoundException( `Error does not exist TP with id: ${id}`)

        return data
    }
}

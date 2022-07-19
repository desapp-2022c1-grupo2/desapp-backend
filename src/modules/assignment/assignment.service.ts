import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {AssignmentEntity} from "./entities";
import {Repository} from "typeorm";

@Injectable()
export class AssignmentService {

    constructor(
        @InjectRepository(AssignmentEntity)
        private readonly tpsRepository: Repository<AssignmentEntity>
    ) {}

    async findAllTps(): Promise<AssignmentEntity[]> {
        const data = await this.tpsRepository.find()

        if(! data) throw new NotFoundException('Error: does not exist data')

        return data
    }

    async findByIdTp(id: number): Promise<AssignmentEntity>{
        const data =  await this.tpsRepository.findOneBy({id} )

        if(! data) throw new NotFoundException( `Error does not exist TP with id: ${id}`)

        return data
    }
}

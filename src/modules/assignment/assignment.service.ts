import {Injectable, NotFoundException} from '@nestjs/common';
import {BaseService} from "../../commons/service.commoms";
import {Assignment} from "./entities/assignment.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";


@Injectable()
export class AssignmentService extends BaseService<Assignment>{

  constructor(
      @InjectRepository(Assignment)
      private readonly assignmentRepository: Repository<Assignment>
  ) {
    super()
  }

  getRepository(): Repository<Assignment>{
    return this.assignmentRepository
  }

  async findOne(id: number) {

    const data = await this.getRepository().findOneBy({id});

    if(! data) throw new NotFoundException('')
    return data
  }


}

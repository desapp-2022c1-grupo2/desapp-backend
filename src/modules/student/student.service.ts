import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Student} from "./entities";
import {Repository} from "typeorm";
import {FindOneOptions} from "typeorm/find-options/FindOneOptions";
import {BaseService} from "../../commons";

@Injectable()
export class StudentService extends BaseService<Student> {


  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>
  ) {
    super();
  }

  getRepository(): Repository<Student> {
    return this.studentRepository;
  }

  async findOne(id: number): Promise<Student> {
    let options: FindOneOptions<Student> = {where: {id}};
    const data = await this.getRepository().findOne(options)

    if (!data) throw new NotFoundException('')
    return data
  }

}

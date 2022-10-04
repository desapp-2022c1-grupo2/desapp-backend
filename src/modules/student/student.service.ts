import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities';
import { Repository } from 'typeorm';
import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';
import { BaseService } from '../../commons';
import { replaceSpecialCharactersForEachField } from '../../helpers/stringUtils';

@Injectable()
export class StudentService extends BaseService<Student> {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {
    super();
  }

  getRepository(): Repository<Student> {
    return this.studentRepository;
  }

  async findOne(id: number): Promise<Student> {
    const options: FindOneOptions<Student> = { where: { id } };
    const entity = await this.getRepository().findOne(options);
    if (!entity) throw new NotFoundException('');
    replaceSpecialCharactersForEachField(entity);
    return entity;
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from '../../commons';
import { Course } from './entities';
import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';

@Injectable()
export class CourseService extends BaseService<Course> {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {
    super();
  }

  getRepository(): Repository<Course> {
    return this.courseRepository;
  }

  async findOne(id: number): Promise<Course> {
    const options: FindOneOptions<Course> = { where: { id } };
    const data = await this.getRepository().findOne(options);

    if (!data) throw new NotFoundException('');
    return data;
  }
}

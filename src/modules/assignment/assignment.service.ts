import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Assignment } from './entities';
import { Repository } from 'typeorm';
import { BaseService } from '../../commons';

@Injectable()
export class AssignmentService extends BaseService<Assignment> {
  constructor(
    @InjectRepository(Assignment)
    private readonly assignmentRepository: Repository<Assignment>,
  ) {
    super();
  }

  async findOne(id: number): Promise<Assignment> {
    const data = await this.assignmentRepository.findOneBy({ id });
    if (!data)
      throw new NotFoundException(
        `Error: does not exist assignment with id: ${id}`,
      );

    return data;
  }

  getRepository(): Repository<Assignment> {
    return this.assignmentRepository;
  }
}

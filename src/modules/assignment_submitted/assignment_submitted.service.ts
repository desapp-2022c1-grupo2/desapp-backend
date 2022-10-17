import { Injectable, NotFoundException } from '@nestjs/common';
import { AssignmentSubmitted } from './entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../../commons';

@Injectable()
export class AssignmentSubmittedService extends BaseService<AssignmentSubmitted> {
  constructor(
    @InjectRepository(AssignmentSubmitted)
    private readonly assignmentSubmittedRepository: Repository<AssignmentSubmitted>,
  ) {
    super();
  }

  async countAllAssignmentSubmitted(): Promise<number> {
    return await this.assignmentSubmittedRepository.count();
  }

  async findOne(id: number): Promise<AssignmentSubmitted> {
    const data = await this.assignmentSubmittedRepository.findOneBy({ id });
    if (!data)
      throw new NotFoundException(
        `Error: does not exist assignment with id: ${id}`,
      );

    return data;
  }

  getRepository(): Repository<AssignmentSubmitted> {
    return this.assignmentSubmittedRepository;
  }
}

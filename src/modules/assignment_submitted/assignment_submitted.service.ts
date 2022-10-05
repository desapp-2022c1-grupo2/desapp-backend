import { Injectable } from '@nestjs/common';
import { AssigmentSubmittedEntity } from './entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AssignmentSubmittedService {
  constructor(
    @InjectRepository(AssigmentSubmittedEntity)
    private readonly assignmentSubmittedRepository: Repository<AssigmentSubmittedEntity>,
  ) {}
  async countAllAssignmentSubmitted(): Promise<number> {
    return await this.assignmentSubmittedRepository.count();
  }
}

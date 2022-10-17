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

  async countAllAssignments(): Promise<number> {
    return await this.assignmentRepository.count();
  }

  /**
   *
   * @param jtp_id id del jtp
   * Return todos los assignments de un jtp
   */
  async AllAssignmentForJtp(jtp_id: number): Promise<Assignment[]> {
    return await this.assignmentRepository
      .createQueryBuilder()
      .select('assignment')
      .from(Assignment, 'assignment')
      .where('assignment.jtp_id = :jtp_id', { jtp_id })
      .getMany();
  }
}

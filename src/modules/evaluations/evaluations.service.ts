import { Injectable } from '@nestjs/common';
import { BaseService } from '../../commons';
import { Evaluation } from './entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EvaluationsService extends BaseService<Evaluation> {
  constructor(
    @InjectRepository(Evaluation)
    private readonly evaluationsRepository: Repository<Evaluation>,
  ) {
    super();
  }

  async findOne(id: number): Promise<Evaluation> {
    return await this.getRepository().findOneBy({ id });
  }

  getRepository(): Repository<Evaluation> {
    return this.evaluationsRepository;
  }

  async findEvaluationsForJtp(id: number): Promise<Evaluation[]> {
    return this.getRepository().find({
      where: {
        jtp: {
          id: id,
        },
      },
    });
  }

  async findEvaluationsForStudent(id: number): Promise<Evaluation[]> {
    return this.getRepository().find({
      where: {
        student: {
          id: id,
        },
      },
    });
  }

  async findEvaluationsForCourse(id: number): Promise<Evaluation[]> {
    return this.getRepository().find({
      where: {
        assignment_submitted: {
          assignment: {
            course: {
              id: id,
            },
          },
        },
      },
    });
  }
}

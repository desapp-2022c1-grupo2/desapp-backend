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
}

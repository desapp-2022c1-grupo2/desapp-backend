import { Injectable, NotFoundException } from '@nestjs/common';
import { BaseService } from '../../commons';
import { Jtp } from './entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';
import { replaceSpecialCharactersForEachField } from '../../helpers/stringUtils';

@Injectable()
export class JtpService extends BaseService<Jtp> {
  constructor(
    @InjectRepository(Jtp)
    private readonly jtpRepository: Repository<Jtp>,
  ) {
    super();
  }

  getRepository(): Repository<Jtp> {
    return this.jtpRepository;
  }

  async findOne(id: number): Promise<Jtp> {
    const options: FindOneOptions<Jtp> = { where: { id } };
    const entity = await this.getRepository().findOne(options);
    if (!entity) throw new NotFoundException('');
    replaceSpecialCharactersForEachField(entity);
    return entity;
  }

  async findOneByEmail(email: string): Promise<Jtp | undefined> {
    const options: FindOneOptions<Jtp> = { where: { email: email } };
    const entity = await this.getRepository().findOne(options);
    if (!entity) return null;
    return entity;
  }

  async resetPassword(id: any) {
    // TODO: Change to env variable
    return await this.getRepository().update(id, {password: "changeme"});
  }
}

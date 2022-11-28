import { Injectable, NotFoundException } from '@nestjs/common';
import {Repository, UpdateResult} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from '../../commons';
import { Admin } from './entities';
import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';
import { generateHash } from '../../helpers/crypto';

@Injectable()
export class AdminService extends BaseService<Admin> {
  constructor(
    @InjectRepository(Admin)
    private readonly adminRepository: Repository<Admin>,
  ) {
    super();
  }

  getRepository(): Repository<Admin> {
    return this.adminRepository;
  }

  async findOne(id: number): Promise<Admin> {
    const options: FindOneOptions<Admin> = { where: { id } };
    const data = await this.getRepository().findOne(options);
    if (!data) throw new NotFoundException('');
    return data;
  }

  async findOneByEmail(email: string): Promise<Admin | undefined> {
    const options: FindOneOptions<Admin> = { where: { email: email } };
    const data = await this.getRepository().findOne(options);
    if (!data) return null;
    return data;
  }

  async save(entity: Admin): Promise<Admin> {
    entity.password = await generateHash(entity.password);
    const data = this.getRepository().create(entity);
    return this.getRepository().save(data);
  }

  async resetPassword(id: any, password: string) {
    let updateResult: UpdateResult = await this.getRepository().update(id, {password: await generateHash(password)});
    console.log(`Resetted password for ADMIN with id ${id} with result = ${updateResult}`);
  }
}

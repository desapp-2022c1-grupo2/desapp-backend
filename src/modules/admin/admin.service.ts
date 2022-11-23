import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from '../../commons';
import { Admin } from './entities';
import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';
import { generateHashPassword } from '../../helpers/crypto';
import { CreatedAdminDto } from './dto';

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

  async save(entity: CreatedAdminDto): Promise<Admin> {
    entity.password = await generateHashPassword(entity.password);
    const data = this.getRepository().create(entity);
    return await this.getRepository().save(data);
  }

  async update(id: number, entity: CreatedAdminDto): Promise<Admin> {
    entity.password = await generateHashPassword(entity.password);
    const data = await this.findOne(id);
    const updatedData = Object.assign(data, entity);
    return await this.getRepository().save(updatedData);
  }
}

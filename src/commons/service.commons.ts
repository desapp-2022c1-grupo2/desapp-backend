import { FindManyOptions, Repository } from 'typeorm';
import { BaseEntity } from './entity';
import { replaceSpecialCharactersForEachField } from '../helpers/stringUtils';

export abstract class BaseService<T extends BaseEntity> {
  abstract getRepository(): Repository<T>;

  async findAll(): Promise<T[]> {
    const entities = await this.getRepository().find();
    entities.forEach((entity) => {
      replaceSpecialCharactersForEachField(entity);
    });
    return entities;
  }

  abstract findOne(id: number): Promise<T>;

  async save(entity: T): Promise<T> {
    const data = this.getRepository().create(entity);
    return await this.getRepository().save(data);
  }

  async delete(id: any) {
    return this.getRepository().delete(id);
  }

  async update(id: any, dto: any): Promise<T> {
    const data = await this.findOne(id);
    const updatedData = Object.assign(data, dto);
    return await this.getRepository().save(updatedData);

  count(options?: FindManyOptions<T>): Promise<number> {
    return this.getRepository().count(options);
  }
}

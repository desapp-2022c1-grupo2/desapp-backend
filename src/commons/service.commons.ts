import {FindManyOptions, Repository} from "typeorm";
import {BaseEntity} from "./entity";
import {replaceSpecialCharactersForEachField} from "../helpers/stringUtils";

export abstract class BaseService<T extends BaseEntity> {

    abstract getRepository(): Repository<T>

    async findAll(): Promise<T[]> {
        let entities = await this.getRepository().find();
        entities.forEach(entity => {
            replaceSpecialCharactersForEachField(entity);
        })
        return entities;
    }

    abstract findOne(id: number): Promise<T>

    async save(entity: T): Promise<T> {
        const data = this.getRepository().create(entity)
        return await this.getRepository().save(data)
    }

    async delete(id: any){
        return this.getRepository().delete(id)

    }

    update(id: any, dto: any){
        return this.getRepository().update(id, dto)
    }

    count(options?: FindManyOptions<T>): Promise<number> {
        return this.getRepository().count(options)
    }

}

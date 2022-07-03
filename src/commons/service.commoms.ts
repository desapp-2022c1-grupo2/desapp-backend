import {FindManyOptions, Repository} from "typeorm";
import {NotFoundException} from "@nestjs/common";
import {FindOneOptions} from "typeorm/find-options/FindOneOptions";
import {BaseEntity} from "./entity/base.entity";
import {FindOptionsWhere} from "typeorm/find-options/FindOptionsWhere";

export abstract class BaseService<T extends BaseEntity> {

    abstract getRepository(): Repository<T>

    findAll(): Promise<T[]>{
        return this.getRepository().find()
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
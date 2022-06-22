import {FindManyOptions, Repository} from "typeorm";
import {NotFoundException} from "@nestjs/common";

export abstract class BaseService<T> {

    abstract getRepository(): Repository<T>

    findAll(): Promise<T[]>{
        return this.getRepository().find()
    }

    async findOne(id: any): Promise<T> {
        const data = await this.getRepository().findOne(id)

        if(!data) throw new NotFoundException('')
        return data
    }

    async save(entity: T): Promise<T> {
        const data = this.getRepository().create(entity)
        return await this.getRepository().save(data)
    }

    async delete(id: any){
        return this.getRepository().delete(id)

    }

    count(options?: FindManyOptions<T>): Promise<number> {
        return this.getRepository().count(options)
    }

}
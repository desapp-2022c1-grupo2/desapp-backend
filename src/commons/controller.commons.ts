import {FindManyOptions} from "typeorm";
import {BaseService} from "./service.commoms";
import {Delete, Get, HttpCode, HttpStatus, Post} from "@nestjs/common";

export abstract class BaseController<T> {

    abstract getService(): BaseService<T>

    @Get('all')
    @HttpCode(HttpStatus.OK)
    async findAll(): Promise<T[]>{
        return await this.getService().findAll()
    }

    @Get('find/:id')
    @HttpCode(HttpStatus.OK)
    async findOne(id: any): Promise<T> {
        return await this.getService().findOne(id)
    }

    @Post('save')
    @HttpCode(HttpStatus.CREATED)
    async save(entity: T): Promise<T> {
        return await this.getService().save(entity)
    }

    @Delete('delete/:id')
    @HttpCode(HttpStatus.OK)
    async delete(id: any){
        return await this.getService().delete(id)

    }

    @Get('count')
    @HttpCode(HttpStatus.OK)
    async count(options?: FindManyOptions<T>): Promise<number> {
        return await this.getService().count(options)
    }

}
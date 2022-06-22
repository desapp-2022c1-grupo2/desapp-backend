import {FindManyOptions} from "typeorm";
import {BaseService} from "./service.commoms";
import {Body, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post} from "@nestjs/common";

export abstract class BaseController<T> {

    abstract getService(): BaseService<T>

    @Get('all')
    @HttpCode(HttpStatus.OK)
    async findAll(): Promise<T[]>{
        return await this.getService().findAll()
    }

    @Get('find/:id')
    @HttpCode(HttpStatus.OK)
    async findOne(@Param('id')id: any): Promise<T> {
        return await this.getService().findOne(id)
    }

    @Post('save')
    @HttpCode(HttpStatus.CREATED)
    async save(@Body() entity: T): Promise<T> {
        return await this.getService().save(entity)
    }

    @Delete('delete/:id')
    @HttpCode(HttpStatus.OK)
    async delete(@Param('id')id: any){
        return await this.getService().delete(id)

    }

    @Patch('update/id')
    update(@Param('id')id: any, @Body() dto: T ){
        return this.getService().update(id, dto)
    }

    @Get('count')
    @HttpCode(HttpStatus.OK)
    async count(options?: FindManyOptions<T>): Promise<number> {
        return await this.getService().count(options)
    }

}
import { BaseService } from './service.commons';
import {
  Body,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BaseEntity } from './entity';

export abstract class BaseController<T extends BaseEntity> {
  abstract getService(): BaseService<T>;

  @Get('')
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<T[]> {
    return await this.getService().findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id') id: number): Promise<T> {
    return await this.getService().findOne(id);
  }

  @Post('')
  @HttpCode(HttpStatus.CREATED)
  async save(@Body() entity: T): Promise<T> {
    return await this.getService().save(entity);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  async delete(@Param('id') id: any) {
    return await this.getService().delete(id);
  }

  @Patch('/:id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: any, @Body() dto: T) {
    return this.getService().update(id, dto);
  }
}

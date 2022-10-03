import {Injectable, NotFoundException} from '@nestjs/common';
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {BaseService} from "../../commons";
import {Admin} from "./entities";
import {FindOneOptions} from "typeorm/find-options/FindOneOptions";

@Injectable()
export class AdminService extends BaseService<Admin> {

  constructor(
    @InjectRepository(Admin)
    private readonly adminRepository: Repository<Admin>
  ) {
    super()
  }

  getRepository(): Repository<Admin> {
    return this.adminRepository;
  }

  async findOne(id: number): Promise<Admin> {
    let options: FindOneOptions<Admin> = {where: {id}};
    const data = await this.getRepository().findOne(options)
    if (!data) throw new NotFoundException('')
    return data
  }

  async findOneByUsername(username: string): Promise<Admin | undefined> {
    let options: FindOneOptions<Admin> = {where: {name: username}};
    const data = await this.getRepository().findOne(options);
    if (!data) throw new NotFoundException('');
    return data;
  }

  async findOneByEmail(email: string): Promise<Admin | undefined> {
    let options: FindOneOptions<Admin> = {where: {email: email}};
    const data = await this.getRepository().findOne(options);
    if (!data) return null;
    return data;
  }

}


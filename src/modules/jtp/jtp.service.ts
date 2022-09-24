import {Injectable, NotFoundException} from '@nestjs/common';
import {BaseService} from "../../commons";
import {Jtp} from "./entities";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {FindOneOptions} from "typeorm/find-options/FindOneOptions";
import {Admin} from "../admin";

@Injectable()
export class JtpService extends BaseService<Jtp> {
  constructor(
    @InjectRepository(Jtp)
    private readonly jtpRepository: Repository<Jtp>
  ) {
    super()
  }

  getRepository(): Repository<Jtp> {
    return this.jtpRepository;
  }

  async findOne(id: number): Promise<Jtp> {
    let options: FindOneOptions<Jtp> = {where: {id}};
    const data = await this.getRepository().findOne(options)

    if(!data) throw new NotFoundException('')
    return data
  }

  async findOneByUsername(username: string): Promise<Jtp | undefined> {
    let options: FindOneOptions<Admin> = {where: {name: username}};
    const data = await this.getRepository().findOne(options);

    if (!data) throw new NotFoundException('');
    return data;
  }


}

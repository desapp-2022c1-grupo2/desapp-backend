import {Injectable, NotFoundException} from '@nestjs/common';
import {BaseService} from "../../commons/service.commoms";
import {Jtp} from "./entities/jtp.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {FindOneOptions} from "typeorm/find-options/FindOneOptions";

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

}

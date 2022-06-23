import {Injectable} from '@nestjs/common';
import {BaseService} from "../../commons/service.commoms";
import {Jtp} from "./entities/jtp.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

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

}

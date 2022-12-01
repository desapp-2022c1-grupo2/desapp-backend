import {Injectable, NotFoundException} from '@nestjs/common';
import {Repository, UpdateResult} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseService} from '../../commons';
import {Admin} from './entities';
import {FindOneOptions} from 'typeorm/find-options/FindOneOptions';
import {generateHash} from '../../helpers/crypto';
import {PasswordResetService} from "../passwordReset/passwordReset.service";
import {PasswordReset} from "../passwordReset/entities";
import {CreatedAdminDto} from "./dto";

@Injectable()
export class AdminService extends BaseService<Admin> {
  constructor(
    @InjectRepository(Admin)
    private readonly adminRepository: Repository<Admin>,
    private readonly passwordResetService: PasswordResetService,
  ) {
    super();
  }

  getRepository(): Repository<Admin> {
    return this.adminRepository;
  }

  async findOne(id: number): Promise<Admin> {
    const options: FindOneOptions<Admin> = { where: { id } };
    const data = await this.getRepository().findOne(options);
    if (!data) throw new NotFoundException('');
    return data;
  }

  async findOneByEmail(email: string): Promise<Admin | undefined> {
    const options: FindOneOptions<Admin> = { where: { email: email } };
    const data = await this.getRepository().findOne(options);
    if (!data) return null;
    return data;
  }

  async save(entity: Admin): Promise<Admin> {
    entity.password = await generateHash(entity.password);
    const data = this.getRepository().create(entity);
    let admin = await this.getRepository().save(data);
    console.log("Creating admin with", {admin})
    await this.passwordResetService.resetPasswordById(admin.id, admin.email, "ADMIN")
    console.log("Sent reset token to email", admin.email);
    return admin;
  }

  async validateAndResetPassword(token: string, password: string){
    const passwordReset: PasswordReset = await this.passwordResetService.isTokenValid(token);
    const {entityId} = passwordReset;
    let updateResult: UpdateResult = await this.getRepository().update(entityId, {password: await generateHash(password)});
    await this.passwordResetService.deletePasswordReset(passwordReset);
    return updateResult;
  }
  async update(id: number, entity: CreatedAdminDto): Promise<Admin> {
    entity.password = await generateHash(entity.password);
    const data = await this.findOne(id);
    const updatedData = Object.assign(data, entity);
    return await this.getRepository().save(updatedData);
  }
}

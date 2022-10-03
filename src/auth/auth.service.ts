import {Injectable} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import {Admin, AdminService, Jtp, JtpService} from "../modules";
import {compareHashPassword} from "../helpers/crypto";

@Injectable()
export class AuthService {
  constructor(
    private adminService: AdminService,
    private jtpService: JtpService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    // Look for JTP and then for admin
    // TODO: Find a way to handle same emails in JTP and Admin. Possible solution: https://github.com/typeorm/typeorm/issues/3940#issuecomment-480333445
    //  Not possible since we can't modify the actual database. See https://github.com/typeorm/typeorm/blob/master/docs/entity-inheritance.md#single-table-inheritance
    // We could receive an extra attribute that contains the user type
    let arePwdEqual: boolean;
    let user: Jtp | Admin = await this.jtpService.findOneByEmail(username);
    arePwdEqual = await compareHashPassword(pass, user.password);
    if (!user || !arePwdEqual){
       user = await this.adminService.findOneByEmail(username);
       arePwdEqual = await compareHashPassword(pass, user.password);
    }
    if (arePwdEqual) {
      const { password, ...result } = user;
      // Workaround to RBAC since we can't modify the database
      let role = user instanceof Jtp ? "Jtp" : "Admin";
      return {...result, role};
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
      user: user,
    };
  }
}

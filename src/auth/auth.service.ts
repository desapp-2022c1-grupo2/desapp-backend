import {Injectable} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import {Admin, AdminService, Jtp, JtpService} from "../modules";

@Injectable()
export class AuthService {
  constructor(
    private adminService: AdminService,
    private jtpService: JtpService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    // Look for JTP and then for admin
    let user: Jtp | Admin = await this.jtpService.findOneByUsername(username);
    if (!user){
       user = await this.adminService.findOneByUsername(username);
    }
    //TODO: bcrypt
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

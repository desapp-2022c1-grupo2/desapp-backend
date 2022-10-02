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
    let user: Jtp | Admin = await this.jtpService.findOneByEmail(username);
    if (!user){
       user = await this.adminService.findOneByEmail(username);
    }
    //TODO: bcrypt
    if (user && user.password === pass) {
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

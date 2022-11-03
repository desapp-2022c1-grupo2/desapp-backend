
import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthService, LocalAuthGuard, Public } from './auth';


@Controller()
export class AppController {
  constructor(private authService: AuthService) {
  }
  
  @Public()
  @UseGuards(LocalAuthGuard)
  @Get('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
  
}
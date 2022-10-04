import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService, LocalAuthGuard, Public } from './auth';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}

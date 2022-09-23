import {Controller, Get, Post, Request, UseGuards} from '@nestjs/common';
import {AuthService, JwtAuthGuard, LocalAuthGuard} from "./auth";
import {Public} from "./auth";

@Controller()
export class AppController {
    constructor(private authService: AuthService) {
    }

    @Public()
    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}

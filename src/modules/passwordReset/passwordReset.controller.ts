import {Body, Controller, HttpCode, HttpStatus, Param, Post} from '@nestjs/common';
import {PasswordResetService} from './passwordReset.service';

@Controller('passwordReset')
export class PasswordResetController {
    constructor(private readonly passwordResetService: PasswordResetService) {
    }

    @Post('')
    async resetPasswordById(@Body() body: { mail: string, role: "JTP" | "ADMIN", id: string }) {
        const {mail, role, id} = body
        return this.passwordResetService.resetPasswordById(id, mail, role)
    }

}

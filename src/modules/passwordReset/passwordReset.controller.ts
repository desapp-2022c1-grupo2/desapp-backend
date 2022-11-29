import {Body, Controller, HttpCode, HttpStatus, Param, Post} from '@nestjs/common';
import {PasswordResetService} from './passwordReset.service';

@Controller('passwordReset')
export class PasswordResetController {
    constructor(private readonly passwordResetService: PasswordResetService) {
    }

    // @Public()
    // @Post('validate/:id')
    // async validateResetById(@Param('id') resetId: any, @Body() body: any) {
    //     const password = body.password;
    //     return this.passwordResetService.isValid(resetId, password);
    // }

    @Post('')
    async resetPasswordById(@Body() body: { mail: string, role: "JTP" | "ADMIN", id: string }) {
        const {mail, role, id} = body
        return this.passwordResetService.resetPasswordById(id, mail, role)
    }

}

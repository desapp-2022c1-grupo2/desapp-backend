import {Body, Controller, HttpCode, HttpStatus, Param, Post} from '@nestjs/common';
import {PasswordResetService} from './passwordReset.service';
import {Public} from "../../auth";

@Controller('passwordReset')
export class PasswordResetController {
    constructor(private readonly passwordResetService: PasswordResetService) {
    }

    @Public()
    @Post('validate/:id')
    async validateResetById(@Param('id') resetId: any, @Body() body: any) {
        const password = body.password;
        return this.passwordResetService.validateResetById(resetId, password);
    }

    @Public()
    @Post('')
    async resetPasswordById(@Body() body: { mail: string, role: "JTP" | "ADMIN", id: string }) {
        const receiverEmail = body.mail;
        const role = body.role
        const entityId = body.id
        return this.passwordResetService.resetPasswordById(entityId, receiverEmail, role)
    }

}

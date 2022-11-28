import {HttpStatus, Injectable} from '@nestjs/common';
import {JtpService} from "../jtp";
import {MailService, passwordResetMessage} from "../mail";
import {InjectRepository} from "@nestjs/typeorm";
import {DeleteResult, Repository} from "typeorm";
import {AdminService} from "../admin";
import {PasswordReset} from "./entities";
import {createHash} from "crypto";
import {NotFoundException} from "@nestjs/common/exceptions/not-found.exception";
import {generateHash} from "../../helpers/crypto";

@Injectable()
export class PasswordResetService {

    constructor(
        @InjectRepository(PasswordReset)
        private readonly passwordResetRepository: Repository<PasswordReset>,
        private readonly jtpService: JtpService,
        private readonly adminService: AdminService,
        private readonly mailService: MailService,
    ) {

    }

    async validateResetById(resetId: string, password: string) {
        // find generated id
        console.log(`Reset password by id with id ${resetId} and password ${password}`);
        const passwordReset: PasswordReset = await this.passwordResetRepository.findOneBy({id: resetId});
        if (!passwordReset) {
            throw new NotFoundException(`Invalid reset token`);
        }
        // Verify if token is expired (5min)
        // if (this.isExpired(passwordReset.createdAt)) {
        //     // Delete reset
        //     const deleteResult: DeleteResult = await this.passwordResetRepository.delete(passwordReset);
        //     console.log(`Deleted ${deleteResult.affected} rows`)
        //     throw new UnauthorizedException(`Reset token expired`);
        // }

        // Change password with new password
        if (passwordReset.entityRole == "JTP") {
            console.log(`Resetting password for JTP with id ${passwordReset.entityId}`)
            await this.jtpService.resetPassword(passwordReset.entityId, password)
        } else {
            console.log(`Resetting and hashing password for Admin with id ${passwordReset.entityId}`)
            let hashPassword = await generateHash(password);
            await this.adminService.resetPassword(passwordReset.entityId, hashPassword);
        }

        // Delete reset
        const deleteResult: DeleteResult = await this.passwordResetRepository.delete(passwordReset);
        console.log(`Deleted ${deleteResult.affected} rows`)
        return HttpStatus.OK;
    }

    private async isExpired(createdAt: Date) {
        const createdAtDate: Date = createdAt as Date;
        const maxTimeBeforeExpiredInMinutes: number = 5;
        const maxExpiredDate: Date = new Date(createdAtDate);
        const nowDate: Date = new Date();
        maxExpiredDate.setMinutes(createdAtDate.getMinutes() + maxTimeBeforeExpiredInMinutes);
        console.log(`createdAtDate = ${createdAtDate}`)
        console.log(`maxExpiredDate = ${maxExpiredDate}`)
        console.log(`nowDate = ${nowDate}`)
        console.log(maxExpiredDate >= nowDate)
        const currentTimestamp: Date = await this.passwordResetRepository.query("SELECT CURRENT_TIMESTAMP();");
        console.log(currentTimestamp);

        return maxExpiredDate >= currentTimestamp;
    }

    async resetPasswordById(entityId: any, receiverEmail: string, role: "JTP" | "ADMIN") {
        // creates a new reset with a salty id, the entity id, its type, and a timestamp
        const resetPasswordUrl: string = await this.createNewReset(entityId, role);
        // sends the user an email with the reset details (url + hash id)
        await this.mailService.sendMail(passwordResetMessage(receiverEmail, resetPasswordUrl));
        return HttpStatus.OK
    }


    private async createNewReset(entityId: any, role: string) {
        if (!(entityId && role)) {
            throw new NotFoundException(`entity_id or entity_role must not be null`)
        }
        const entity: PasswordReset = new PasswordReset(role, entityId);
        const data: PasswordReset = this.passwordResetRepository.create(entity);
        const createdAt: number = Date.now();
        const hashId: string = createHash('sha512').update(String(data.id).concat(String(createdAt))).digest('hex');
        data.id = hashId;

        let passwordResetLog = `PasswordReset (id: ${data.id}, entityRole: ${data.entityRole}, entityId: ${data.entityId}, createdAt: ${data.createdAt})`;
        console.log(`Saving new reset with data = ${passwordResetLog}`)
        const passwordReset: PasswordReset = await this.passwordResetRepository.save(data);
        passwordResetLog = `PasswordReset (id: ${passwordReset.id}, entityRole: ${passwordReset.entityRole}, entityId: ${passwordReset.entityId}, createdAt: ${passwordReset.createdAt})`;
        console.log(`Saved new reset with data = ${passwordResetLog}`)

        // TODO: REPLACE WITH ENV VARIABLE
        let backendUrl = `http://localhost:3002`;
        return `${backendUrl}/passwordReset/${hashId}`;
    }
}

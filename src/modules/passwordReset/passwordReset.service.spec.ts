import {Test, TestingModule} from '@nestjs/testing';
import {PasswordResetService} from "./passwordReset.service";
import {TypeOrmModule, TypeOrmModuleOptions} from "@nestjs/typeorm";
import {PasswordReset} from "./entities";
import {Jtp} from "../jtp";
import {Admin} from "../admin";
import {MailModule} from "../mail";
import {ConfigModule, ConfigService} from "@nestjs/config";
import databaseConfig from "../../config/database.config";
import * as Joi from "@hapi/joi";
import {TYPEORM_CONFIG} from "../../config";
import {Timestamp} from "typeorm";

describe('PasswordResetService', () => {


    it('should be defined', () => {
        const createdAtDate: Date = new Date('2022-11-13T18:00:00.000Z');
        const validDate: Date = new Date('2022-11-13T18:00:00.000Z');
        const anotherValid: Date = new Date('2022-11-13T18:05:00.000Z');
        const invalidDate: Date = new Date('2022-11-13T18:05:30.000Z');
        const maxTimeBeforeExpiredInMinutes: number = 5;
        const maxExpiredDate: Date = new Date(createdAtDate);
        maxExpiredDate.setMinutes(createdAtDate.getMinutes() + maxTimeBeforeExpiredInMinutes);
        expect(maxExpiredDate>=validDate).toBeTruthy()
        expect(maxExpiredDate>=anotherValid).toBeTruthy()
        expect(maxExpiredDate>=invalidDate).toBeFalsy()

    });
});

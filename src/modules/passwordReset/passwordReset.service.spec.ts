import {PasswordResetService} from "./passwordReset.service";
import {CryptoJS} from "crypto-js";

describe('PasswordResetService', () => {


    it('should be defined', () => {
        const createdAtDate: Date = new Date('2022-11-13T18:00:00.000Z');
        const validDate: Date = new Date('2022-11-13T18:00:00.000Z');
        const anotherValid: Date = new Date('2022-11-13T18:05:00.000Z');
        const invalidDate: Date = new Date('2022-11-13T18:05:30.000Z');
        const maxTimeBeforeExpiredInMinutes: number = 5;
        const maxExpiredDate: Date = new Date(createdAtDate);
        maxExpiredDate.setMinutes(createdAtDate.getMinutes() + maxTimeBeforeExpiredInMinutes);
        expect(maxExpiredDate >= validDate).toBeTruthy()
        expect(maxExpiredDate >= anotherValid).toBeTruthy()
        expect(maxExpiredDate >= invalidDate).toBeFalsy()

    });

    it('should decode', () => {
        const b64 = "SGVsbG8sIFdvcmxkIQ==";
        const str = 'Hello, World!'

        const decode = (str: string): string => Buffer.from(str, 'base64').toString('binary');
        const encode = (str: string): string => Buffer.from(str, 'binary').toString('base64');
        expect(encode(str)).toEqual(b64);
        console.log(str)
        console.log(b64)
        console.log(encode(str).toString())
    });
});

import {Injectable} from '@nestjs/common';
const sendgrid = require('@sendgrid/mail');

@Injectable()
export class MailService {
    constructor(
    ) {
        // TODO: process.env.SENDGRID_API_KEY
        const SENDGRID_API_KEY = "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";
        sendgrid.setApiKey(SENDGRID_API_KEY);
    }

    public async sendMail(msg){
        return await sendgrid.send(msg);
    }
}

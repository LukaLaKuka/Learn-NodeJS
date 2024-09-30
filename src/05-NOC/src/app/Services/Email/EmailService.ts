import { createTransport } from "nodemailer";
import { Configuration } from "../../../config/plugins/env.plugin";
import path from "path";
import { Paths } from "../../../config/paths";

type Attachment = {
    filename: string,
    path: string,
}

interface sendMailOptions {
    to: string | string[];
    subject: string;
    htmlBody: string;
    attachments?: Attachment[]
}

export class EmailService {

    private transporter = createTransport({
        service: Configuration.MAILER_SERVICE,
        auth: {
            user: Configuration.MAILER_EMAIL,
            pass: Configuration.MAILER_SECRET_KEY,
        }
    });

    constructor() { }

    public async sendEmail(options: sendMailOptions): Promise<boolean> {

        const { to, subject, htmlBody: html, attachments = [] } = options;

        try {
            const sentMailInfo = await this.transporter.sendMail({
                to,
                subject,
                html,
                attachments
            });
            return true;
        } catch (err: Error | any) {
            console.error(err);
            return false;
        }
    }

    public async sendEmailWithFileSystemLogs(to: string | string[]) {
        const subject = 'Nuevos Logs de hoy';
        const htmlBody = `
        <h3>Logs del NOC de hoy:</h3>
        <p style="color: red;">REVISAR SERVICIOS LO ANTES POSIBLE</p>`

        const attachments: Attachment[] = [
            { filename: 'logs.log', path: path.join(Paths.logs, 'logs.log') },
            { filename: 'warning.log', path: path.join(Paths.logs, 'warning.log') },
            { filename: 'danger.log', path: path.join(Paths.logs, 'danger.log') }
        ];

        return this.sendEmail({ to, subject, htmlBody, attachments });
    }
}
import { LogSeverityLevel } from "../../Models/Loggers/Interfaces/LoggerInterface";
import { LogEntity } from "../../Models/Loggers/LogEntity";
import { LogRepository } from "../../Repositories/LoggerRepository/LogRepository";
import { EmailService } from "../../Services/Email/EmailService";

interface ISendLogEmail {
    execute: (to: string | string[]) => Promise<boolean>
}

export class SendLogEmail implements ISendLogEmail {

    constructor(
        private readonly EmailService: EmailService,
        private readonly LogRepository: LogRepository
    ) { }

    async execute(to: string | string[]): Promise<boolean> {
        try {
            const sent = await this.EmailService.sendEmailWithFileSystemLogs(to);
            return true;
        } catch (err) {
            const log = new LogEntity({
                message: '',
                level: LogSeverityLevel.high,
                origin: __filename
            });
            this.LogRepository.saveLog(log);
            return false;
        }

    }
}
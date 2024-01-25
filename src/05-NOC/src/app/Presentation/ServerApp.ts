import { CheckService } from "../Modules/CheckService/CheckService";
import { CronService } from "../Services/CronService/CronService";
import pc from "picocolors";
import { FileSystemDataSource } from "../Services/FileSys/FileSys";
import { LogRepositoryImplementation } from "../Repositories/LoggerRepository/LogRepository";
import { EmailService } from "../Services/Email/EmailService";
import { SendLogEmail } from "../Modules/SendLogs/SendLogs";

const FileSystemLogRepository = new LogRepositoryImplementation(
    new FileSystemDataSource()
);

const LogMailSendClient = new SendLogEmail(
    new EmailService,
    FileSystemLogRepository
);

export class ServerApp {

    /**
     * Fn to start the Server
     */
    public static run(): void {
        console.log('Server running...');
        CronService.createJob('*/5 * * * * *', () => {
            new CheckService(
                FileSystemLogRepository,
                () => { console.log(pc.green('Json Service Working')) },
                (err: string) => {
                    console.error(pc.red(`Json Service Error - ${err}`));
                }
            ).execute(`http://localhost:3000`);
        }).start();

        console.log(LogMailSendClient);
        //LogMailSendClient.execute(['tomhuelytr@gmail.com']);
    }
}
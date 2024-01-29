import { CheckService } from "../Modules/CheckService/CheckService";
import { CronService } from "../Services/CronService/CronService";
import pc from "picocolors";
import { LogRepositoryImplementation } from "../Repositories/LoggerRepository/LogRepository";
import { EmailService } from "../Services/Email/EmailService";
import { SendLogEmail } from "../Modules/SendLogs/SendLogs";
import { MongoDataSource } from "../Services/Mongo/MongoDataSource";
import { FileSystemDataSource } from "../Services/FileSys/FileSys";
import { PostgresDataSource } from "../Services/Postgres/PostgresDataSource";
import { CheckServiceMultiple } from "../Modules/CheckService/CheckServiceMultiplate";

const LogRepository = new LogRepositoryImplementation(
    new PostgresDataSource()
);

const LogRepositories = [
    new LogRepositoryImplementation(new FileSystemDataSource()),
    new LogRepositoryImplementation(new MongoDataSource()),
    new LogRepositoryImplementation(new PostgresDataSource()),
]

const LogMailSendClient = new SendLogEmail(
    new EmailService(),
    LogRepository
);

export class ServerApp {

    /**
     * Fn to start the Server
     */
    public static async run(): Promise<void> {
        console.log('Server running...');
        CronService.createJob('*/5 * * * * *', () => {
            new CheckServiceMultiple(
                LogRepositories,
                () => { console.log(pc.green('Json Service Working')) },
                (err: string) => {
                    console.error(pc.red(`Json Service Error - ${err}`));
                }
            ).execute(`http://localhost:3000`);
        }).start();
        //const logs = await LogRepository.getLogs();
        //console.log(logs);
    }
}
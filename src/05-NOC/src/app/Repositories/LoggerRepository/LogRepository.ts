import { LogEntity } from "../../Models/Loggers/LogEntity";
import { LogSeverityLevel } from "../../Models/Loggers/Interfaces/LoggerInterface";
import { LogDataSource } from "../../Models/Loggers/Interfaces/LogDataSource";

export abstract class LogRepository {
    abstract saveLog(log: LogEntity): Promise<boolean | void>;
    abstract getLogs(severityLevel?: LogSeverityLevel): Promise<LogEntity[]>
}

export class LogRepositoryImplementation implements LogRepository {

    constructor(
        private readonly logDataSource: LogDataSource,
    ) {
    }
    saveLog(log: LogEntity): Promise<boolean | void> {
        return this.logDataSource.saveLog(log);
    }
    getLogs(severityLevel?: LogSeverityLevel | undefined): Promise<LogEntity[]> {
        return this.logDataSource.getLogs(severityLevel);
    }
}
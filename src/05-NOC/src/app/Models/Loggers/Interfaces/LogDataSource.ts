import { LogEntity } from "../LogEntity";
import { LogSeverityLevel } from "./LoggerInterface";

export abstract class LogDataSource {
    abstract saveLog(log: LogEntity): Promise<void>;
    abstract getLogs(severityLevel?: LogSeverityLevel): Promise<LogEntity[]>
}
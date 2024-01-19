import { LogSeverityLevel, ILogger } from "./Interfaces/LoggerInterface";

export class LogEntity implements ILogger {

    public level: LogSeverityLevel;
    public message: string;
    public createdAt: Date;

    constructor(message: string, level: LogSeverityLevel) {
        this.level = level;
        this.message = message;
        this.createdAt = new Date();
    }

    static fromJson = (json: string): LogEntity => {
        let { message, level, createdAt } = JSON.parse(json);
        const log = new LogEntity(message, level).createdAt = createdAt;
        return log;
    }
}
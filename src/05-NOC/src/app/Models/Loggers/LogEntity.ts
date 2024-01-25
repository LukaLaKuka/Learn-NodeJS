import { LogSeverityLevel, ILogger } from "./Interfaces/LoggerInterface";

interface LogEntityOptions {
    message: string,
    level: LogSeverityLevel,
    origin: string
}
export class LogEntity implements ILogger {

    public level: LogSeverityLevel;
    public message: string;
    public createdAt: Date;
    public origin: string;

    constructor(options: LogEntityOptions) {
        this.level = options.level;
        this.message = options.message;
        this.createdAt = new Date();
        this.origin = options.origin;
    }

    static fromJson = (json: string): LogEntity => {
        let { message, level, createdAt } = JSON.parse(json);
        const log = new LogEntity({ message, level, origin: __filename }).createdAt = createdAt;
        return log;
    }
}
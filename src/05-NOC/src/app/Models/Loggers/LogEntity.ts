import { LogSeverityLevel, ILogger } from "./Interfaces/LoggerInterface";

interface LogEntityOptions {
    message: string,
    level: LogSeverityLevel,
    origin: string,
    createdAt?: Date
}
export class LogEntity implements ILogger {

    public level: LogSeverityLevel;
    public message: string;
    public createdAt: Date;
    public origin: string;

    constructor(options: LogEntityOptions) {
        const { message, level, origin, createdAt = new Date() } = options;
        this.level = level;
        this.message = message;
        this.createdAt = createdAt;
        this.origin = origin;
    }

    static fromJson = (json: string): LogEntity => {
        let { message, level, createdAt, origin } = JSON.parse(json);
        const log = new LogEntity({
            message,
            level,
            origin,
            createdAt: new Date(createdAt)
        });
        return log;
    }

    static fromObject = (object: { [key: string]: any }): LogEntity => {
        const { message, level, createdAt, origin } = object;
        const log = new LogEntity({
            message,
            level,
            createdAt,
            origin
        });
        return log;
    }
}
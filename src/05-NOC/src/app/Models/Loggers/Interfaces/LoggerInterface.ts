import { LogEntity } from "../LogEntity";

export interface ILogger {
    level: LogSeverityLevel;
    message: string;
    createdAt: Date;
}

export enum LogSeverityLevel {
    low = 'Low',
    medium = 'Medium',
    high = 'High'
}
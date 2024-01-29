import { LogEntity } from "../LogEntity";

export interface ILogger {
    level: LogSeverityLevel;
    message: string;
    createdAt: Date;
    origin: string;
}

export enum LogSeverityLevel {
    low = 'Low',
    medium = 'Medium',
    high = 'High'
}
import { LogDataSource } from "../../Models/Loggers/Interfaces/LogDataSource";
import { LogSeverityLevel } from "../../Models/Loggers/Interfaces/LoggerInterface";
import { LogEntity } from "../../Models/Loggers/LogEntity";
import { PrismaClient, SeverityLevel } from "@prisma/client";

export class PostgresDataSource extends LogDataSource {

    private readonly connection = new PrismaClient();

    async saveLog(log: LogEntity): Promise<void> {
        const level = this.getSeverityLevel(log.level);
        try {
            const res = await this.connection.logModel.create({
                data: {
                    ...log,
                    level
                }
            });
        } catch (err) {
            console.error(err);
        }
    }

    private getSeverityLevel(logSeverityLevel: LogSeverityLevel): SeverityLevel {
        switch (logSeverityLevel) {
            case LogSeverityLevel.high: return SeverityLevel.HIGH;
            case LogSeverityLevel.medium: return SeverityLevel.MEDIUM;
            case LogSeverityLevel.low: return SeverityLevel.LOW;
            default: throw new Error("LogSeverityLevel doesn't exists");

        }
    }


    async getLogs(severityLevel?: LogSeverityLevel | undefined): Promise<LogEntity[]> {
        try {
            const level: SeverityLevel = this.getSeverityLevel(severityLevel ?? LogSeverityLevel.low);
            const prismaLogs = await this.connection.logModel.findMany({
                where: { level }
            });
            const logs: LogEntity[] = prismaLogs.map(LogEntity.fromObject);
            return logs;
        } catch (err) {
            console.error(err);
            return [];
        }
    }

}
import { LogModel } from "../../../data/mongo";
import { LogDataSource } from "../../Models/Loggers/Interfaces/LogDataSource";
import { LogSeverityLevel } from "../../Models/Loggers/Interfaces/LoggerInterface";
import { LogEntity } from "../../Models/Loggers/LogEntity";

export class MongoDataSource extends LogDataSource {

    async saveLog(log: LogEntity): Promise<void> {
        const newLog = await LogModel.create(log);
        await newLog.save();
    }

    async getLogs(severityLevel?: LogSeverityLevel | undefined): Promise<LogEntity[]> {
        const logs = await LogModel.find({
            level: severityLevel
        });

        return logs.map(LogEntity.fromObject);
    }
}
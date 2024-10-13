import path from "path";
import fs from "fs";
import { Paths } from "../../../config/paths";
import { LogDataSource } from "../../Models/Loggers/Interfaces/LogDataSource";
import { LogSeverityLevel } from "../../Models/Loggers/Interfaces/LoggerInterface";
import { LogEntity } from "../../Models/Loggers/LogEntity";

export class FileSystemDataSource implements LogDataSource {

    private readonly LogPath = Paths.logs;
    private readonly AllLogPath = path.join(this.LogPath, '/logs.log');
    private readonly MediumLogPath = path.join(this.LogPath, '/warning.log');
    private readonly HighLogPath = path.join(this.LogPath, '/danger.log');

    constructor() {
        this.createLogsFiles();
    }

    private createLogsFiles = () => {
        if (!fs.existsSync(this.LogPath)) {
            fs.mkdirSync(this.LogPath);
            fs.writeFileSync(path.join(this.LogPath, '.gitignore'), '*.log', { encoding: 'utf-8' });
        }

        [this.AllLogPath, this.MediumLogPath, this.HighLogPath].map((file) => {
            if (!fs.existsSync(file)) {
                fs.writeFileSync(file, '', { encoding: 'utf-8' });
            }
        });
    }

    async saveLog(log: LogEntity): Promise<void> {
        let logString: string = `${JSON.stringify(log)}\n`;

        fs.appendFileSync(this.AllLogPath, logString, { encoding: 'utf-8' });

        if (log.level === LogSeverityLevel.low) return;

        if (log.level === LogSeverityLevel.medium) {
            fs.appendFileSync(this.MediumLogPath, logString, { encoding: 'utf-8' });
            return;
        }

        if (log.level === LogSeverityLevel.high) {
            fs.appendFileSync(this.HighLogPath, logString, { encoding: 'utf-8' });
            return;
        }
    }


    async getLogs(severityLevel?: LogSeverityLevel | undefined): Promise<LogEntity[]> {
        switch (severityLevel) {
            case LogSeverityLevel.high:
                return this.getLogsFromFile(this.HighLogPath);
            case LogSeverityLevel.medium:
                return this.getLogsFromFile(this.MediumLogPath);
            case LogSeverityLevel.low:
                return this.getLogsFromFile(this.AllLogPath);
            default:
                throw new Error(`${severityLevel} doesn't exists`);
        }
    }

    private getLogsFromFile(path: string): LogEntity[] {
        const content = fs.readFileSync(path, 'utf-8');
        const logs = content.split('\n').filter((log) => log.trim() !== '').map(LogEntity.fromJson);
        return logs;
    }
}
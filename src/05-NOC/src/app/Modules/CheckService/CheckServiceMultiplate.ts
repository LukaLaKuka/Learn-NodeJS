import { LogSeverityLevel } from "../../Models/Loggers/Interfaces/LoggerInterface";
import { LogEntity } from "../../Models/Loggers/LogEntity";
import { LogRepository } from "../../Repositories/LoggerRepository/LogRepository";

interface ICheckService {
    execute(url: string): Promise<boolean>
}

type SuccessCallback = () => void | undefined;
type ErrorCallback = (error: string) => void | undefined;

export class CheckServiceMultiple implements ICheckService {

    private readonly successCallback?: SuccessCallback;
    private readonly errorCallback?: ErrorCallback;
    private readonly logRepositories: LogRepository[];

    constructor(
        logRepositories: LogRepository[],
        successCallback?: SuccessCallback,
        errorCallback?: ErrorCallback
    ) {
        this.successCallback = successCallback;
        this.errorCallback = errorCallback;
        this.logRepositories = logRepositories;
    }

    public async execute(url: string): Promise<boolean> {
        try {
            const req = await fetch(url);
            if (!req.ok) {
                throw new Error(`Error Checking the service on ${url}`);
            }
            this.successCallback && this.successCallback();
            return true;
        } catch (err: Error | any) {
            this.callLogs(new LogEntity({
                message: err.message,
                level: LogSeverityLevel.high,
                origin: __filename
            }));
            this.errorCallback && this.errorCallback(err.message);
            return false;
        }
    }

    private async callLogs(log: LogEntity) {
        this.logRepositories.forEach((logRepo: LogRepository) => {
            logRepo.saveLog(log);
        });
    }
}
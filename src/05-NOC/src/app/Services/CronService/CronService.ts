import { CronJob } from "cron";

type CronTime = string | Date;
type CronFn = () => void;

export class CronService {

    constructor() {

    }

    public static createJob(frequency: CronTime, fn: CronFn): CronJob {
        return new CronJob(frequency, fn);
    }
}
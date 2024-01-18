import { CheckService } from "../Modules/CheckService/CheckService";
import { CronService } from "../Services/CronService/CronService";

export class ServerApp {

    /**
     * Fn to start the Server
     */
    public static run(): void {
        console.log('Server running...');
        CronService.createJob('*/5 * * * * *', () => {
            new CheckService().execute(`https://www.google.com`);
        }).start();
    }
}
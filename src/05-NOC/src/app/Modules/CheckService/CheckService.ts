interface ICheckService {
    execute(url: string): Promise<boolean>
}

export class CheckService implements ICheckService {

    // private storageService: any;

    // constructor(storageService: any) {
    //     this.storageService = storageService;
    // }

    public async execute(url: string): Promise<boolean> {
        try {
            const req = await fetch(url);
            if (!req.ok) {
                throw new Error(`Error Checking the service on ${url}`);
            }
            console.log(`${url} service working`);
            return true;
        } catch (err: Error | any) {
            console.error(`Service ${url} failed with '${err.message}'`);
            return false;
        }
    }
}
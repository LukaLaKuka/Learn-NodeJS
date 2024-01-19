interface ICheckService {
    execute(url: string): Promise<boolean>
}

type SuccessCallback = () => void;
type ErrorCallback = (error: string) => void;

export class CheckService implements ICheckService {

    private readonly successCallback: SuccessCallback;
    private readonly errorCallback: ErrorCallback;

    constructor(
        successCallback: SuccessCallback,
        errorCallback: ErrorCallback
    ) {
        this.successCallback = successCallback;
        this.errorCallback = errorCallback;
    }

    public async execute(url: string): Promise<boolean> {
        try {
            const req = await fetch(url);
            if (!req.ok) {
                throw new Error(`Error Checking the service on ${url}`);
            }
            this.successCallback();
            return true;
        } catch (err: Error | any) {
            this.errorCallback(err.message);
            return false;
        }
    }
}
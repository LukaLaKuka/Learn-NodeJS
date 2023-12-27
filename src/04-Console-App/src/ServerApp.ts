import { CreateTable } from "./domain/use-cases/create-table.use-case";
import { multiplicationTable } from "./multiplicator";

interface IServerOptions {
    base: number,
    length: number,
    show: boolean,
    outputDir: string,
    filename: string
}

export class ServerApp {
    static run(options: IServerOptions) {
        console.log(`Server running...`);
        const table = new CreateTable().execute(options);
        options.show ? console.log(table) : null;
    }
}
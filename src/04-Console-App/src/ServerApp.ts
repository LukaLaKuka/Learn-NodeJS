import { CreateTable } from "./domain/use-cases/create-table.use-case";
import { SaveFile } from "./domain/use-cases/save-file.use-case";

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
        const successFileSave = new SaveFile().execute({ outputDir: options.outputDir, filename: options.filename, data: table });
        successFileSave ? console.log("File created succesfully!") : console.error("Error creating File...");
    }
}
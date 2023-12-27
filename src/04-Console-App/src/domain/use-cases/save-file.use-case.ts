import fs from "node:fs"
import path from "node:path"

interface ISaveFileUseCase {
    execute: (options: IFileData) => boolean;
}

interface IFileData {
    outputDir: string;
    filename: string;
    data: string;
}

export class SaveFile implements ISaveFileUseCase {

    constructor() {

    }

    execute({ outputDir, filename, data }: IFileData): boolean {
        try {
            if (!(outputDir === '')) {
                fs.mkdirSync(outputDir, { recursive: true })
            }
            fs.writeFileSync(path.join(outputDir, `${filename}.txt`), data, 'utf-8');
            return true;
        } catch (err) {
            return false;
        }
    };
}
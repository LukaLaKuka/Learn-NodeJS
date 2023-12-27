export interface ICreateTableUseCase {
    execute: (options: ITableData) => string;
}

interface ITableData {
    base: number;
    length: number;
}

export class CreateTable implements ICreateTableUseCase {
    constructor() {

    }

    execute({ base, length }: ITableData): string {
        let output: string = `===========================
Tabla del ${base} sobre ${length}
===========================\n`
        for (let i = 0; i <= length; i++) {
            output += `${base} x ${i} = ${base * i}\n`;
        }
        return output;

    }
}
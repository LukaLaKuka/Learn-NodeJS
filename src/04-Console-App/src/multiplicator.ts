import path from 'node:path';
import fs, { WriteFileOptions } from 'node:fs';

export const multiplicationTable = ({ base, length, show, outputDir, filename }: { base: number, length: number, show: boolean, outputDir: string, filename: string }) => {
    const output = generateOutput(base, length);
    if (show) {
        console.log(output);
    }
    saveFile(outputDir, filename, output, { encoding: 'utf-8' });
}

const generateOutput = (base: number, length: number): string => {
    let output: string = `===========================
Tabla del ${base} sobre ${length}
===========================\n`
    for (let i = 0; i <= length; i++) {
        output += `${base} x ${i} = ${base * i}\n`;
    }
    return output;
}

const saveFile = (outputDir: string, filename: string, data: string, options: WriteFileOptions) => {
    if (!(outputDir === '')) {
        fs.mkdirSync(outputDir, { recursive: true })
    }
    fs.writeFileSync(path.join(outputDir, `${filename}.txt`), data, options);
    console.log(`File created succesfully!`);
}
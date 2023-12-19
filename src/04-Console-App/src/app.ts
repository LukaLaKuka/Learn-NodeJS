import path from 'node:path';
import fs from 'node:fs';

const args = process.argv;
args.splice(0, 2);

// * Tabla del 10 con argumento pasado:

const number = Number(args[0]);

if (!Number.isInteger(number)) {
    throw new Error(`Not valid argument`)
}

const output = (n: number) => {
    let result: string = `===========================
       Tabla del ${number}
===========================\n`
    for (let i = 0; i <= 10; i++) {
        result += `${number} x ${i} = ${number * i}\n`;
    }
    return result;
}

const outputDir = 'output';

fs.mkdirSync(outputDir, { recursive: true })
fs.writeFileSync(path.join(outputDir, `table-${number}.txt`), output(number), { encoding: 'utf-8' });
console.log(output(number));

import yargs from "yargs";
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        description: 'Multiplication base table'
    }).option('l', {
        alias: 'length',
        type: 'number',
        default: 10,
        description: 'Multiplication table limit'
    }).option('s', {
        alias: 'show',
        type: 'boolean',
        default: false,
        description: 'Show the table in console'
    }).option('o', {
        alias: 'outputDir',
        type: 'string',
        default: '',
        description: 'Output Dir File'
    }).option('n', {
        alias: 'filename',
        type: 'string',
        default: `table-new`,
        description: 'Filename'
    }).check((yarg, options) => {
        if (yarg.b < 0) {
            console.error('Base cannot be under 0. Converting base to 0...');
            yarg.b = 0;
        }
        return true;
    })
    .parseSync();
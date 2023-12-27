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
        demandOption: true,
        default: 10,
        description: 'Multiplication table limit'
    }).option('s', {
        alias: 'show',
        type: 'boolean',
        default: false,
        demandOption: true,
        description: 'Show the table in console'
    }).option('o', {
        alias: 'outputDir',
        type: 'string',
        default: '',
        demandOption: true,
        description: 'Output Dir File'
    }).option('n', {
        alias: 'filename',
        type: 'string',
        default: `table-new`,
        demandOption: true,
        description: 'Filename'
    }).check((yarg, options) => {
        if (yarg.b < 0) {
            throw new Error('Base must be a natural number');
        }
        return true;
    })
    .parseSync();
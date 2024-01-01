import { SaveFile } from "../../../src/domain/use-cases/save-file.use-case";
import fs from 'node:fs';
import path from 'node:path';

describe('Save File Case Use Tests', () => {
    afterEach(() => {
        const existsOutputDir = fs.existsSync('outputs');
        const existsDefaultTable = fs.existsSync('new table.txt');
        if (existsOutputDir) fs.rmSync('outputs', { recursive: true });
        if (existsDefaultTable) fs.rmSync('new table.txt');
    });

    const SaveFileInstance = new SaveFile();

    test('file Created succesfully with min Args', () => {
        const options = {
            data: "Hello!"
        };
        const SaveSuccess = SaveFileInstance.execute(options);
        const fileExists = fs.existsSync('new table.txt');
        const fileContent = fs.readFileSync('new table.txt', { encoding: 'utf-8' });
        expect(SaveSuccess).toBe(true);
        expect(fileExists).toBe(true);
        expect(fileContent).toBe('Hello!');
    });

    test('file Created succesfully with full Args', () => {
        const options = {
            data: "Hello!",
            outputDir: "outputs",
            filename: 'test'
        };
        const destination = path.join(options.outputDir, options.filename + '.txt');
        const SaveSuccess = SaveFileInstance.execute(options);
        const fileExists = fs.existsSync(destination);
        const fileContent = fs.readFileSync(destination, { encoding: 'utf-8' });
        expect(SaveSuccess).toBe(true);
        expect(fileExists).toBe(true);
        expect(fileContent).toBe('Hello!');
    });

    test('Should return false if file has been created', () => {
        const options = {
            data: 'Hello Fail!'
        };

        const writeSyncMock = jest.spyOn(fs, 'writeSync').mockImplementation(() => {
            throw new Error('This is a custom error message from testing - writeSyncMock');
        });

        const SaveSuccess = SaveFileInstance.execute(options);
        expect(SaveSuccess).toBe(false);

        writeSyncMock.mockRestore();
    });

    test('Should return false', () => {
        const options = {
            data: 'Hello Fail!',
            outputDir: 'outputs'
        };

        const mkdirMock = jest.spyOn(fs, 'mkdirSync').mockImplementation(() => {
            throw new Error('This is a custom error message from testing - mkdirMock');
        });

        const SaveSuccess = SaveFileInstance.execute(options);
        expect(SaveSuccess).toBe(false);

        mkdirMock.mockRestore();
    });
});
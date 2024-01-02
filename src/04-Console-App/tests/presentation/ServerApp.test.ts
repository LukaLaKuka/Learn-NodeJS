import { CreateTable } from '../../src/domain/use-cases/create-table.use-case';
import { SaveFile } from '../../src/domain/use-cases/save-file.use-case';
import { IServerOptions, ServerApp } from '../../src/presentation/ServerApp';

describe('Server App Suit Tests', () => {

    const options: IServerOptions = {
        base: 5,
        length: 15,
        show: true,
        outputDir: 'outputs',
        filename: 'myFilename'
    };

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('ServerApp Instance test', () => {
        const server: ServerApp = new ServerApp();
        expect(server).toBeInstanceOf(ServerApp);
        expect(typeof ServerApp.run).toBe('function');
    });

    test('ServerApp Run Test with Options', () => {
        // const logSpy = jest.spyOn(console, 'log');
        // const SaveFileSpy = jest.spyOn(SaveFile.prototype, 'execute');
        // const CreateTableSpy = jest.spyOn(CreateTable.prototype, 'execute');
        // ServerApp.run(options);
        // expect(logSpy).toHaveBeenCalledTimes(3);
        // expect(logSpy).toHaveBeenCalledWith(`Server running...`);
        // expect(logSpy).toHaveBeenCalledWith(`File created succesfully!`);
        // 
        // expect(CreateTableSpy).toHaveBeenCalledWith(options);
        // expect(CreateTableSpy).toHaveBeenCalledTimes(1);
        // expect(SaveFileSpy).toHaveBeenCalledWith({ data: expect.any(String), outputDir: options.outputDir, filename: options.filename });
        // expect(SaveFileSpy).toHaveBeenCalledTimes(1);
    });

    test('Should run with custom values mocked', () => {
        const CreateTableMock = jest.fn().mockReturnValue(`1 + 1 = 2`);
        const SaveFileMock = jest.fn().mockReturnValue(true);
        const LogMock = jest.fn();

        CreateTable.prototype.execute = CreateTableMock;
        SaveFile.prototype.execute = SaveFileMock;
        global.console.log = LogMock;

        ServerApp.run(options);

        expect(LogMock).toHaveBeenCalledWith(`Server running...`);
        if (options.show) {
            expect(LogMock).toHaveBeenCalledWith(`1 + 1 = 2`);
            expect(LogMock).toHaveBeenCalledTimes(3);
        } else {
            expect(LogMock).toHaveBeenCalledTimes(2);
        }
        expect(LogMock).toHaveBeenCalledWith(`File created succesfully!`);

        expect(CreateTableMock).toHaveBeenCalledWith(options);
        expect(CreateTableMock).toHaveBeenCalledTimes(1);

        expect(SaveFileMock).toHaveBeenCalledWith({
            data: `1 + 1 = 2`,
            outputDir: options.outputDir,
            filename: options.filename
        });
        expect(SaveFileMock).toHaveBeenCalledTimes(1);
    });

    test('SaveFile Fails returning false', () => {
        const CreateTableMock = jest.fn().mockReturnValue(`1 + 1 = 2`);
        const SaveFileMock = jest.fn().mockReturnValue(false);
        const LogMock = jest.fn();
        const LogErrorMock = jest.fn();

        CreateTable.prototype.execute = CreateTableMock;
        SaveFile.prototype.execute = SaveFileMock;
        global.console.log = LogMock;
        global.console.error = LogErrorMock;

        ServerApp.run(options);

        expect(LogMock).toHaveBeenCalledWith(`Server running...`);
        if (options.show) {
            expect(LogMock).toHaveBeenCalledWith(`1 + 1 = 2`);
            expect(LogMock).toHaveBeenCalledTimes(2);
        } else {
            expect(LogMock).toHaveBeenCalledTimes(1);
        }

        expect(LogErrorMock).toHaveBeenCalledWith(`Error creating File...`);
        expect(LogErrorMock).toHaveBeenCalledTimes(1);

        expect(CreateTableMock).toHaveBeenCalledWith(options);
        expect(CreateTableMock).toHaveBeenCalledTimes(1);

        expect(SaveFileMock).toHaveBeenCalledWith({
            data: `1 + 1 = 2`,
            outputDir: options.outputDir,
            filename: options.filename
        });
        expect(SaveFileMock).toHaveBeenCalledTimes(1);
    });
});
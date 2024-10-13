import path from "path";
import fs from 'fs';
import { FileSystemDataSource } from '../../../../src/app/Services/FileSys/FileSys';
import { LogEntity } from "../../../../src/app/Models/Loggers/LogEntity";
import { LogSeverityLevel } from "../../../../src/app/Models/Loggers/Interfaces/LoggerInterface";

describe('File System Logs Suite', () => {

    const logPath = path.join(__dirname, '..', '..', '..', '..', 'src', 'logs');

    beforeEach(() => {
        fs.rmSync(logPath, { force: true, recursive: true });
    });

    test('should create log files if they do not exist', () => {
        new FileSystemDataSource();

        const files = fs.readdirSync(logPath);

        expect(files).toHaveLength(4);
        expect(files).toContain('logs.log');
        expect(files).toContain('warning.log');
        expect(files).toContain('danger.log');
        expect(files).toContain('.gitignore');
        expect(files).toEqual(['.gitignore', 'danger.log', 'logs.log', 'warning.log']);
    });

    test('should save log', async () => {
        const logDataSource = new FileSystemDataSource();

        const log = new LogEntity({
            level: LogSeverityLevel.low,
            origin: __filename,
            message: 'Test for saving log in File System',
            createdAt: new Date(),
        });

        await logDataSource.saveLog(log);
        const logs = fs.readFileSync(path.join(logPath, 'logs.log'), 'utf-8');
        expect(logs).toContain(JSON.stringify(log));
    });

    test('should save danger log', async () => {
        const logDataSource = new FileSystemDataSource();

        const log = new LogEntity({
            level: LogSeverityLevel.high,
            origin: __filename,
            message: 'Test for saving log in File System',
            createdAt: new Date(),
        });

        await logDataSource.saveLog(log);
        const dangerLogs = fs.readFileSync(path.join(logPath, 'danger.log'), 'utf-8');
        const logs = fs.readFileSync(path.join(logPath, 'logs.log'), 'utf-8');
        expect(dangerLogs).toContain(JSON.stringify(log));
        expect(logs).toContain(JSON.stringify(log));
    });

    test('should save warning log', async () => {
        const logDataSource = new FileSystemDataSource();

        const log = new LogEntity({
            level: LogSeverityLevel.medium,
            origin: __filename,
            message: 'Test for saving log in File System',
            createdAt: new Date(),
        });

        await logDataSource.saveLog(log);
        const warningLogs = fs.readFileSync(path.join(logPath, 'warning.log'), 'utf-8');
        const logs = fs.readFileSync(path.join(logPath, 'logs.log'), 'utf-8');
        expect(logs).toContain(JSON.stringify(log));
        expect(warningLogs).toContain(JSON.stringify(log));
    });

    test('expect to throw an error', async () => {
        const logDataSource = new FileSystemDataSource();
        const log = new LogEntity({
            level: LogSeverityLevel.low,
            origin: __filename,
            message: 'Test for saving log in File System',
            createdAt: new Date(),
        });

        await logDataSource.saveLog(log);
        await expect(logDataSource.getLogs()).rejects.toThrow(`${undefined} doesn't exists`);
    });

    test('get all logs', async () => {
        const logDataSource = new FileSystemDataSource();
        const log = new LogEntity({
            level: LogSeverityLevel.low,
            origin: __filename,
            message: 'Test for saving log in File System',
            createdAt: new Date(),
        });

        await logDataSource.saveLog(log);
        await logDataSource.saveLog(log);
        const logs = await logDataSource.getLogs(LogSeverityLevel.low);

        expect(logs).toHaveLength(2);
        expect(logs[0]).toBeInstanceOf(LogEntity);
        expect(logs[0]).toEqual(log);
    });

    test('get warning logs', async () => {
        const logDataSource = new FileSystemDataSource();
        const log = new LogEntity({
            level: LogSeverityLevel.medium,
            origin: __filename,
            message: 'Test for saving log in File System',
            createdAt: new Date(),
        });

        await logDataSource.saveLog(log);
        await logDataSource.saveLog(log);
        const logs = await logDataSource.getLogs(LogSeverityLevel.medium);

        expect(logs).toHaveLength(2);
        logs.forEach((logLoop) => {
            expect(logLoop).toBeInstanceOf(LogEntity);
            expect(logLoop).toEqual(log);
        });
    });

    test('get danger logs', async () => {
        const logDataSource = new FileSystemDataSource();
        const log = new LogEntity({
            level: LogSeverityLevel.high,
            origin: __filename,
            message: 'Test for saving log in File System',
            createdAt: new Date(),
        });

        await logDataSource.saveLog(log);
        await logDataSource.saveLog(log);
        await logDataSource.saveLog(log);
        const logs = await logDataSource.getLogs(LogSeverityLevel.high);

        expect(logs).toHaveLength(3);
        logs.forEach((logLoop) => {
            expect(logLoop).toBeInstanceOf(LogEntity);
            expect(logLoop).toEqual(log);
        });
    });
});
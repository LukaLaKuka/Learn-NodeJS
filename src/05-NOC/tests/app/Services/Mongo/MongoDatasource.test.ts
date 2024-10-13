import { MongoDatabase } from '../../../../src/data/mongo/init';
import { Configuration } from '../../../../src/config/plugins/env.plugin';
import mongoose from 'mongoose';
import { MongoDataSource } from '../../../../src/app/Services/Mongo/MongoDataSource';
import { LogSeverityLevel } from '../../../../src/app/Models/Loggers/Interfaces/LoggerInterface';
import { LogEntity } from '../../../../src/app/Models/Loggers/LogEntity';
import { LogModel } from '../../../../src/data/mongo';

describe('Mongo Datasource Testing', () => {

    beforeAll(async () => {
        await MongoDatabase.connect({
            mongoUrl: Configuration.MONGO_URL,
            databaseName: Configuration.MONGO_DB_NAME
        });
    });

    afterAll(() => {
        mongoose.connection.close();
    })

    beforeEach(() => {
        jest.clearAllMocks();
    });

    afterEach(async () => {
        await LogModel.deleteMany();
    });

    const logDataSource = new MongoDataSource();
    const logSpy = jest.spyOn(logDataSource, 'saveLog');

    test('Should create a log', async () => {
        const log = new LogEntity({
            origin: 'test',
            message: 'test-message',
            level: LogSeverityLevel.low,
            createdAt: new Date()
        });

        await logDataSource.saveLog(log);

        expect(logSpy).toHaveBeenCalledWith(log);
        expect(logSpy).toHaveBeenCalledTimes(1);
        expect(logSpy).toHaveBeenCalledWith(expect.any(LogEntity));;
    });

    test('Get logs', async () => {
        const log = new LogEntity({
            origin: 'test',
            message: 'test-message',
            level: LogSeverityLevel.low,
            createdAt: new Date()
        });

        await logDataSource.saveLog(log);
        await logDataSource.saveLog(log);

        const logs = await logDataSource.getLogs(LogSeverityLevel.low);

        expect(logs).toHaveLength(2);
        expect(logs[0].level).toBe(LogSeverityLevel.low);

    });

    test('Get logs of none', async () => {
        const log = new LogEntity({
            origin: 'test',
            message: 'test-message',
            level: LogSeverityLevel.low,
            createdAt: new Date()
        });

        await logDataSource.saveLog(log);
        await logDataSource.saveLog(log);

        const logs = await logDataSource.getLogs(LogSeverityLevel.high);

        expect(logs).toHaveLength(0);
    });
});
import { LogModel, MongoDatabase } from "../../../../src/data/mongo";
import { Configuration } from "../../../../src/config/plugins/env.plugin";
import mongoose from "mongoose";
import { SeverityLevel } from "@prisma/client";
import { LogSeverityLevel } from "../../../../src/app/Models/Loggers/Interfaces/LoggerInterface";

describe('Log Model Test Suit', () => {

    beforeAll(async () => {
        await MongoDatabase.connect({
            mongoUrl: Configuration.MONGO_URL,
            databaseName: Configuration.MONGO_DB_NAME
        });
    });

    afterAll(() => {
        mongoose.connection.close();
    })

    test('should return log model', async () => {
        const logData = {
            origin: 'test',
            message: 'test-message',
            level: LogSeverityLevel.low,
            createdAt: new Date()
        }

        const log = await LogModel.create(logData);

        expect(log.origin).toEqual(logData.origin);
        expect(log.message).toEqual(logData.message);
        expect(log.level).toEqual(logData.level);
        expect(log.createdAt).toEqual(logData.createdAt);
    });

    test('should return log model', async () => {
        const logData = {
            origin: 'test',
            message: 'test-message',
            level: LogSeverityLevel.low,
            createdAt: new Date()
        }

        const log = await LogModel.create(logData);

        expect(log.origin).toEqual(logData.origin);
        expect(log.message).toEqual(logData.message);
        expect(log.level).toEqual(logData.level);
        expect(log.createdAt).toEqual(logData.createdAt);

        await LogModel.findByIdAndDelete(log.id);
    });

    test('should return log schema model', async () => {
        const schema = LogModel.schema.obj;

        expect(schema).toEqual(expect.objectContaining({
            message: { type: expect.any(Function), required: true },
            level: {
                type: expect.any(Function),
                enum: ['Low', 'Medium', 'High'],
                default: 'low'
            },
            createdAt: { type: expect.any(Function), default: expect.any(Date) },
            origin: expect.any(Function)
        }))
    });
});
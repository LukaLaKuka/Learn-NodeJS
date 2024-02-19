import { LogSeverityLevel } from '../../../src/app/Models/Loggers/Interfaces/LoggerInterface';
import { LogEntity } from '../../../src/app/Models/Loggers/LogEntity';

describe('Log Entity Tests Suit', () => {

    test('Create LogEntity Instance with Minimal Params', () => {
        const entityMock = new LogEntity({
            message: 'Minimal Params',
            origin: __filename,
            level: LogSeverityLevel.low
        });

        expect(entityMock).toBeInstanceOf(LogEntity);
        expect(entityMock).toEqual(expect.objectContaining({
            level: LogSeverityLevel.low,
            message: 'Minimal Params',
            origin: __filename,
        }));
        expect(entityMock.createdAt).toBeInstanceOf(Date);
    });

    test('Create LogEntity Instance with Maximum Params', () => {
        const options = {
            message: 'Maximum Params',
            origin: __filename,
            level: LogSeverityLevel.low,
            createdAt: new Date(),
        };

        const entityMock = new LogEntity(options);
        expect(entityMock).toBeInstanceOf(LogEntity);
        expect(entityMock).toEqual(expect.objectContaining(options));
    });

    test('Serializes an Object to LogEntity', () => {
        const object = {
            message: 'Object Data',
            origin: 'test',
            level: LogSeverityLevel.low,
            createdAt: new Date(),
        };

        const entityMock = LogEntity.fromObject(object);

        expect(entityMock).toBeInstanceOf(LogEntity);
        expect(entityMock).toEqual(expect.objectContaining(object));
    });

    test('Serializes a JSON to LogEntity', () => {
        const myJSON = '{"level":"High","message":"fetch failed","createdAt":"2024-01-26T13:16:40.042Z","origin":"/home/tomhuel/Projects/NodeJS-Zero-to-Pro/src/05-NOC/src/app/Modules/CheckService/CheckService.ts"}';
        const entityMock = LogEntity.fromJson(myJSON);

        expect(entityMock).toBeInstanceOf(LogEntity);
        expect(entityMock.createdAt).toBeInstanceOf(Date);
        expect(entityMock.level).toBe(LogSeverityLevel.high);
        expect(entityMock.message).toBe('fetch failed');
        expect(entityMock.origin).toBe("/home/tomhuel/Projects/NodeJS-Zero-to-Pro/src/05-NOC/src/app/Modules/CheckService/CheckService.ts");
    });
});
import { LogDataSource } from '../../../src/app/Models/Loggers/Interfaces/LogDataSource';
import { LogSeverityLevel } from '../../../src/app/Models/Loggers/Interfaces/LoggerInterface';
import { LogEntity } from '../../../src/app/Models/Loggers/LogEntity';
import { LogRepositoryImplementation } from '../../../src/app/Repositories/LoggerRepository/LogRepository';

describe('Log Repository Suite', () => {

    const mockLogDataSource = {
        saveLog: jest.fn(),
        getLogs: jest.fn()
    } as LogDataSource;

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Should call the saveLog function', async () => {
        const logRepo = new LogRepositoryImplementation(mockLogDataSource);

        await logRepo.saveLog(new LogEntity({
            origin: 'test',
            message: 'test-message',
            level: LogSeverityLevel.low
        }));

        expect(mockLogDataSource.saveLog).toHaveBeenCalled();
        expect(mockLogDataSource.saveLog).toHaveBeenCalledTimes(1);
        expect(mockLogDataSource.saveLog).toHaveBeenCalledWith(expect.any(LogEntity));
    });

    test('Should call the getLogs function', async () => {
        const logRepo = new LogRepositoryImplementation(mockLogDataSource);

        logRepo.getLogs(LogSeverityLevel.low);

        expect(mockLogDataSource.getLogs).toHaveBeenCalled();
        expect(mockLogDataSource.getLogs).toHaveBeenCalledTimes(1);
        expect(mockLogDataSource.getLogs).toHaveBeenCalledWith(LogSeverityLevel.low);
    });
});
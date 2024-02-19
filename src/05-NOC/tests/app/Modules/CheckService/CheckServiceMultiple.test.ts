import { LogEntity } from '../../../../src/app/Models/Loggers/LogEntity';
import { LogRepositoryImplementation } from '../../../../src/app/Repositories/LoggerRepository/LogRepository';
import { CheckServiceMultiple } from '../../../../src/app/Modules/CheckService/CheckServiceMultiplate';
describe('Multiple Check Service Suit Tests', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    })

    const MockLogRepository = {
        saveLog: jest.fn(),
        getLogs: jest.fn(),
    }

    const MockLogRepository2 = {
        saveLog: jest.fn(),
        getLogs: jest.fn(),
    }

    const MockLogRepository3 = {
        saveLog: jest.fn(),
        getLogs: jest.fn(),
    }

    const successCB = jest.fn();
    const failCB = jest.fn();

    const myMockLogRepository = new LogRepositoryImplementation(
        MockLogRepository
    );

    const myMockLogRepository2 = new LogRepositoryImplementation(
        MockLogRepository2
    );

    const myMockLogRepository3 = new LogRepositoryImplementation(
        MockLogRepository3
    );

    test('Check Service Instance', () => {
        const myNewService = new CheckServiceMultiple(
            [myMockLogRepository, myMockLogRepository2, myMockLogRepository3]
        );

        expect(myNewService).toBeInstanceOf(CheckServiceMultiple);
        expect(myNewService).toHaveProperty('execute');
        expect(typeof myNewService.execute).toBe('function');
    });

    test('Multiple Check Service Executes correctly', async () => {
        const myNewService = new CheckServiceMultiple(
            [myMockLogRepository, myMockLogRepository2, myMockLogRepository3],
            successCB,
            failCB
        );

        const resultSuccess = await myNewService.execute('https://cursos.devtalles.com');

        expect(resultSuccess).toBe(true);
        expect(successCB).toHaveBeenCalled();
        expect(failCB).not.toHaveBeenCalled();
        expect(MockLogRepository.saveLog).not.toHaveBeenCalledWith(expect.any(LogEntity));
        expect(MockLogRepository2.saveLog).not.toHaveBeenCalledWith(expect.any(LogEntity));
        expect(MockLogRepository3.saveLog).not.toHaveBeenCalledWith(expect.any(LogEntity));
    });

    test('Multiple Check Service Fails', async () => {

        const myNewService = new CheckServiceMultiple(
            [myMockLogRepository, myMockLogRepository2, myMockLogRepository3],
            successCB,
            failCB
        );

        const resultFail = await myNewService.execute('https://localhost:3000123');

        expect(resultFail).toBe(false);
        expect(failCB).toHaveBeenCalled();
        expect(successCB).not.toHaveBeenCalled();
        expect(MockLogRepository.saveLog).toHaveBeenCalledWith(expect.any(LogEntity));
        expect(MockLogRepository2.saveLog).toHaveBeenCalledWith(expect.any(LogEntity));
        expect(MockLogRepository3.saveLog).toHaveBeenCalledWith(expect.any(LogEntity));
    });
});
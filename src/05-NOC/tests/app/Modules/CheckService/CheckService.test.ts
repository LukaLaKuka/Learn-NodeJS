import { LogEntity } from '../../../../src/app/Models/Loggers/LogEntity';
import { LogRepositoryImplementation } from '../../../../src/app/Repositories/LoggerRepository/LogRepository';
import { CheckService } from '../../../../src/app/Modules/CheckService/CheckService';
describe('Check Service Suit Tests', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    })

    const MockLogRepository = {
        saveLog: jest.fn(),
        getLogs: jest.fn(),
    }

    const successCB = jest.fn();
    const failCB = jest.fn();

    const myMockLogRepository = new LogRepositoryImplementation(
        MockLogRepository
    );

    test('Check Service Instance', () => {
        const myNewService = new CheckService(
            myMockLogRepository
        );

        expect(myNewService).toBeInstanceOf(CheckService);
        expect(myNewService).toHaveProperty('execute');
        expect(typeof myNewService.execute).toBe('function');
    });

    test('Check Service Executes correctly', async () => {
        const myNewService = new CheckService(
            myMockLogRepository,
            successCB,
            failCB
        );

        const resultSuccess = await myNewService.execute('https://www.google.com');

        expect(resultSuccess).toBe(true);
        expect(successCB).toHaveBeenCalled();
        expect(failCB).not.toHaveBeenCalled();
        expect(MockLogRepository.saveLog).not.toHaveBeenCalledWith(expect.any(LogEntity));
    });

    test('Check Service Fails', async () => {

        const myNewService = new CheckService(
            myMockLogRepository,
            successCB,
            failCB
        );

        const resultFail = await myNewService.execute('https://localhost:3000123');

        expect(resultFail).toBe(false);
        expect(failCB).toHaveBeenCalled();
        expect(successCB).not.toHaveBeenCalled();
        expect(MockLogRepository.saveLog).toHaveBeenCalledWith(expect.any(LogEntity));
    });
});
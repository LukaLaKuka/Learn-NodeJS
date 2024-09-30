import { SendLogEmail } from '../../../../src/app/Modules/SendLogs/SendLogs';
import { LogEntity } from '../../../../src/app/Models/Loggers/LogEntity';
import { LogSeverityLevel } from '../../../../src/app/Models/Loggers/Interfaces/LoggerInterface';
describe('Send Logs Suit Tests', () => {

    const MockLogRepository = {
        saveLog: jest.fn(),
        getLogs: jest.fn()
    }

    const MockEmailService = {
        sendEmailWithFileSystemLogs: jest.fn().mockReturnValue(true),
    };

    const SendLogMailer = new SendLogEmail(
        MockEmailService as any,
        MockLogRepository
    );

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Instance of SendLogEmail', () => {
        const SendLogMailer = new SendLogEmail(
            MockEmailService as any,
            MockLogRepository
        );

        expect(SendLogMailer).toBeInstanceOf(SendLogEmail);
        expect(typeof SendLogMailer.execute).toBe('function');
    });

    test('Should call to sendEmail and saveLog', async () => {

        const result = await SendLogMailer.execute('tomhuelytr@gmail.com');

        expect(result).toBe(true);

    });

    test('Should log in case of error', async () => {

        MockEmailService.sendEmailWithFileSystemLogs.mockResolvedValue(false);

        const result = await SendLogMailer.execute('tomhuelytr@gmail.com');

        expect(result).toBe(false);
        expect(MockEmailService.sendEmailWithFileSystemLogs).toHaveBeenCalledTimes(1);
        expect(MockLogRepository.saveLog).toBeCalledWith(expect.any(LogEntity));
        expect(MockLogRepository.saveLog).toHaveBeenCalledWith({
            level: LogSeverityLevel.high,
            origin: expect.any(String),
            message: '',
            createdAt: expect.any(Date)
        });
    });
});
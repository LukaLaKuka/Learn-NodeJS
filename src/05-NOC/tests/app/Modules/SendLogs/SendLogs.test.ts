import { SendLogEmail } from '../../../../src/app/Modules/SendLogs/SendLogs';
import { EmailService } from '../../../../src/app/Services/Email/EmailService';
describe('Send Logs Suit Tests', () => {

    const MockLogRepository = {
        saveLog: jest.fn(),
        getLogs: jest.fn()
    }

    const MockEmailService = {
        sendEmailWithFileSystemLogs: jest.fn(),
        sendEmail: jest.fn(),
    } as EmailService;

    test('Instance of SendLogEmail', () => {
        const SendLogMailer = new SendLogEmail(
            MockEmailService,
            MockLogRepository
        );

        expect(SendLogMailer).toBeInstanceOf(SendLogEmail);
        expect(typeof SendLogMailer.execute).toBe('function');
    });

    test('')
});
import { mock } from 'node:test';
import { LogDataSource } from '../../../../src/app/Models/Loggers/Interfaces/LogDataSource';
import { LogSeverityLevel } from '../../../../src/app/Models/Loggers/Interfaces/LoggerInterface';
import { LogEntity } from '../../../../src/app/Models/Loggers/LogEntity';

describe('Log Data Source Abstract Class Tests Suit', () => {


    class MockLogDataSource implements LogDataSource {
        async saveLog(log: LogEntity): Promise<void> {
            return
        }
        async getLogs(severityLevel?: LogSeverityLevel | undefined): Promise<LogEntity[]> {
            return [new LogEntity({
                message: 'High Severity',
                origin: __filename,
                level: LogSeverityLevel.high,
            })];
        }
    }

    test('should test the abstract class', async () => {
        const mockLog = new MockLogDataSource();

        expect(mockLog).toBeInstanceOf(MockLogDataSource);
        expect(mockLog).toHaveProperty('saveLog');
        expect(mockLog).toHaveProperty('getLogs');
        expect(typeof mockLog.saveLog).toBe('function');
        expect(typeof mockLog.getLogs).toBe('function');
        const highLogs = await mockLog.getLogs(LogSeverityLevel.high);
        expect(highLogs).toEqual([expect.objectContaining({
            message: 'High Severity',
            origin: __filename,
            level: LogSeverityLevel.high
        })]);
    });
});
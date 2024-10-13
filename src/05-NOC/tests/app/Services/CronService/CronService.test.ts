import { CronService } from '../../../../src/app/Services/CronService/CronService';
describe('CronService Test Suite', () => {

    const mockTick = jest.fn();

    test('should create a job', (done) => {
        const job = CronService.createJob('* * * * * *', mockTick);

        job.start();

        setTimeout(() => {
            expect(mockTick).toHaveBeenCalledTimes(2);
            job.stop();
            done();
        }, 2000);
    });
});
import { buildLogger } from "../../src/plugins";

describe('Winston Logger Test:', () => {
    const logger = buildLogger('test');

    test('Logger Test', () => {
        try {
            logger.log('This is a Test');
            logger.error('This is a Test');
        } catch (e) {
            throw e;
        }
    });
});
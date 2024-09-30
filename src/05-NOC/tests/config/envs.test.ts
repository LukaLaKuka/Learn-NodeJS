import { Configuration } from "../../src/config/plugins/env.plugin";

describe('Enviroment Variables Suit Tests', () => {

    test('Envs Config', () => {
        expect(Configuration).toEqual({
            PORT: 3000,
            MAILER_EMAIL: 'tomhuelytr@gmail.com',
            MAILER_SECRET_KEY: '********',
            MAILER_SERVICE: 'gmail',
            MONGO_URL: 'mongodb://tomhuel:123456@localhost:27017',
            MONGO_DB_NAME: 'NOC-TEST',
            MONGO_USER: 'tomhuel',
            MONGO_PASS: '123456',
            PROD: false
        });
    });

    test('Should return an error if not found env', async () => {

        jest.resetModules();
        process.env.PORT = 'helloTest';
        try {
            await import("../../src/config/plugins/env.plugin");
        } catch (error: unknown) {
            expect(`${error}`).toContain(`"PORT" should be a valid integer`);
        }
    });
});
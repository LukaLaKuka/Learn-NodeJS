import { ServerApp } from "../src/presentation/ServerApp";

describe('App Test Suit', () => {

    test('Should call ServerApp.run with values', async () => {
        const ServerAppMock = jest.fn();
        ServerApp.run = ServerAppMock;
        process.argv = ['node', 'app.ts', '-b', '10', '-l', '5', '-s', '-o', 'output', '-n', 'new-Table'];
        await import("../src/app");

        expect(ServerAppMock).toHaveBeenCalledWith(expect.objectContaining({
            base: 10,
            length: 5,
            show: true,
            outputDir: 'output',
            filename: `new-Table`
        }));
        expect(ServerAppMock).toHaveBeenCalledTimes(1);
    });

});
const runCommand = async (args: string[]) => {
    process.argv = [...process.argv, ...args];
    const { yarg } = await import('../../../src/config/plugins/yargs.plugin');
    return yarg;
}

describe('Yargs Plugin Tests', () => {

    const originalArgv = process.argv;

    beforeEach(() => {
        process.argv = originalArgv;
        jest.resetModules();
    });

    test('should return default values', async () => {
        const base = 5;
        const argv = await runCommand(['-b', String(base)]);
        expect(argv).toEqual(expect.objectContaining({
            base: base,
            length: 10,
            filename: 'table-new',
            outputDir: '',
            show: false
        }));
    });

    test('should return custom params', async () => {
        const base = 34;
        const length = 83;
        const filename = 'my-test-filename';
        const outputDir = 'myTestDir';
        const argv = await runCommand(['-b', String(base), '-l', String(length), '-s', '-n', String(filename), '-o', String(outputDir)]);
        expect(argv).toEqual(expect.objectContaining({
            base: base,
            length: length,
            filename: filename,
            outputDir: outputDir,
            show: true
        }));
    });

    test('should throw error', async () => {
        const LogErrorMock = jest.fn();
        global.console.error = LogErrorMock;
        const base = -5;
        const argv = await runCommand(['-b', String(base)]);
        expect(LogErrorMock).toHaveBeenCalledTimes(1);
        expect(LogErrorMock).toHaveBeenCalledWith('Base cannot be under 0. Converting base to 0...');
    });
});
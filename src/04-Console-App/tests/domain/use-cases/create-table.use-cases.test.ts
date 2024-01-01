import { CreateTable } from "../../../src/domain/use-cases/create-table.use-case";

describe('Create Table Use Case Tests', () => {
    test('Should return succesfully the output:', () => {
        const base = 10;
        const length = 10;
        const createTable = new CreateTable();
        const table = createTable.execute({ base, length });

        expect(createTable).toBeInstanceOf(CreateTable);
        expect(table).toContain('10 x 1 = 10');
        expect(table).toContain('10 x 10 = 100');
        expect(table).toContain(`Tabla del ${base} sobre ${length}`);
        expect(table).toEqual(`===========================
Tabla del ${base} sobre ${length}
===========================
10 x 0 = 0
10 x 1 = 10
10 x 2 = 20
10 x 3 = 30
10 x 4 = 40
10 x 5 = 50
10 x 6 = 60
10 x 7 = 70
10 x 8 = 80
10 x 9 = 90
10 x 10 = 100
`);

    });
});
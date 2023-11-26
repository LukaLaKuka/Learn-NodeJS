import { generateUUID } from "../../src/plugins";

describe('UUID Plugin Tests:', () => {
    test('Generate a UUID succesfully', () => {
        const uuid = generateUUID();

        expect(typeof uuid).toEqual('string');
        expect(uuid.length).toEqual(36);
    });
});
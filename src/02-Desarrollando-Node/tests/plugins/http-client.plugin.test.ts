import { httpClient } from "../../src/plugins";

describe('httpClient', () => {
    test('Get data', async () => {
        const url = `https://pokeapi.co/api/v2/pokemon/4`;
        const data = await httpClient.get(url);
        expect(data.name).toEqual("charmander");
    });
});
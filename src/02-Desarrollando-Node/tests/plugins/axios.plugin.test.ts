import { httpAxiosClient } from "../../src/plugins";

describe('httpAxiosClient', () => {
    test('Get data', async () => {
        const url = `https://pokeapi.co/api/v2/pokemon/4`;
        const data = await httpAxiosClient.get(url);
        expect(data.data.name).toEqual("charmander");
    });

    test('Handles fetch error', async () => {
        const url = 'https://pokeapi.co/api/v2/pokemon/-1';

        try {
            await httpAxiosClient.get(url);
        } catch (error: any) {
            expect(error).toEqual(`Error fetching ${url}`);
        }
    });
});
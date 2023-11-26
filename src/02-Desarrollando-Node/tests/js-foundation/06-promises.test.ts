import { getPokemonById } from "../../src/js-foundation/06-promises";

describe('Get Pokemon Tests', () => {

    test('Getting Charmander Pokemon', async () => {
        const pokemonId = 4;
        const pokemonName = await getPokemonById(pokemonId);
        expect(pokemonName).toEqual("charmander");
    });

    test('Getting error', async () => {
        const pokemonId = -1;
        try {
            const pokemonName = await getPokemonById(pokemonId);
            expect(pokemonName).toThrow(`Pokemon not found with id: ${pokemonId}`);
        } catch (error) {
            console.log(error);
        }
    });
});
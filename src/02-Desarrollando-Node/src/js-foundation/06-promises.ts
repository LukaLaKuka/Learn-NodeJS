import { httpClient } from "../plugins"

const getPokemonById = async (id: number): Promise<string | undefined> => {
    try {
        const url: string = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const pokemon = await httpClient.get(url);
        return pokemon.name;
    } catch (error) {
        throw `Pokemon not found with id: ${id}`;
    }
}

export {
    getPokemonById
}
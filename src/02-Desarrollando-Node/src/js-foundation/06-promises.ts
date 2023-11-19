import { httpClient } from "../plugins"

const getPokemonById = async (id: number) => {
    try {
        const url: string = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const pokemon = await httpClient.get(url);
        return pokemon.name;
    } catch (e) {
        if (typeof e === 'string') {
            throw new Error(e);
        } else {
            // Handle the case where e is undefined or another type
        }
    }
}


export {
    getPokemonById
}
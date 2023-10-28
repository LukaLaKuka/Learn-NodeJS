const { httpClient } = require('../plugins')

const getPokemonById = async (id) => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const pokemon = await httpClient.get(url);
        return pokemon.name;
    } catch (e) {
        throw new Error(e);
    }
}


module.exports = {
    getPokemonById,
}
// * Módulos
//const {emailTemplate} = require('./js-foundation/01-template');

//console.log(emailTemplate);

// * Desestructuración
//require("./js-foundation/02-destructuring");

// * Callbacks
/*
const { findUser } = require("./js-foundation/03-callbacks");

findUser(1, function (error, user) {
    if (error) {
        throw new Error(error);
    }
    findUser(2, function (error, user2) {
        if (error) {
            throw new Error(error);
        }

        console.log(user, user2);
    })
});
*/

// * Ejercicio de Callbacks para Arrow Functions

/**
const { findUser } = require("./js-foundation/04-arrows-functions");

findUser(1, (error, user) => {
    if (error) {
        throw new Error(error);
    }
    findUser(4, (error, user2) => {
        if (error) {
            throw new Error(error);
        }

        console.log(user, user2);
    })
});
*/

// * Ejercicio de Arrow Functions por mi cuenta

// require("./js-foundation/04.1-arrow-functions");

// * Ejercicio 5 - Factory Build

/*
const { buildMakePerson } = require('./js-foundation/05-factory');

const { getAge, generateUUID } = require('./plugins');

const person = {
    name: 'John Doe',
    birthday: '2003-06-23'
}

const makePerson = buildMakePerson({ generateUUID, getAge });
const jhon = makePerson(person);

console.log(jhon);

*/

// * Ejercicio 6 - Promises & Async - await & HTTP Client & Axios

/*
const { getPokemonById } = require('./js-foundation/06-promises');

getPokemonById("474")
    .then(pokemon => {console.log(pokemon)})
    .catch(err => {
        console.error(err);
    });
*/

// * Ejercicio 7 (inventado) => Pasar el getPokemonById con Factory Build y Packaging de Packages

/*
const { httpAxiosClient, httpClient } = require('./plugins');

httpAxiosClient.get(`https://pokeapi.co/api/v2/pokemon/1`)
    .then(response => { console.log(response.data.name) })
    .catch(err => { console.error(err) });

httpClient.get(`https://pokeapi.co/api/v2/pokemon/1`)
    .then(response => { console.log(response.name) })
    .catch(err => { console.error(err) });

*/

// ! Sección 4

// * Winston Logger

const { buildLogger } = require('./plugins')

const logger = buildLogger('app.js');

logger.error("ESTO ES UN ERROR");
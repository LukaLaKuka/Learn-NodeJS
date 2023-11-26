"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMakePerson = void 0;
const { getAge, generateUUID } = require('../plugins');
const buildMakePerson = ({ generateUUID, getAge }) => {
    return ({ name, birthday }) => {
        return {
            id: generateUUID(),
            name: name,
            birthdate: birthday,
            age: getAge(birthday)
        };
    };
};
exports.buildMakePerson = buildMakePerson;

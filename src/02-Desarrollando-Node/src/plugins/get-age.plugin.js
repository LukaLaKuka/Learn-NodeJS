"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAge = void 0;
const getAgePackage = require('get-age');
const getAge = (birthdate) => {
    return getAgePackage(birthdate);
};
exports.getAge = getAge;

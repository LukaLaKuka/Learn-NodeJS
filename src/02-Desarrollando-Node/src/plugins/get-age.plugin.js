const getAgePackage = require('get-age');

const getAge = (birthdate) => {
    if (!birthdate) return new Error(`No Birthdate given`);

    return getAgePackage(birthdate);
}

module.exports = {
    getAge,
}
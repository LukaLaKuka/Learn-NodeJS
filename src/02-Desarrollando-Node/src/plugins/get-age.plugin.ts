const getAgePackage = require('get-age');

const getAge: any = (birthdate: string) => {
    if (!birthdate) return new Error(`No Birthdate given`);

    return getAgePackage(birthdate);
}

module.exports = {
    getAge,
}
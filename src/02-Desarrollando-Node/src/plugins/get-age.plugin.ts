const getAgePackage = require('get-age');

const getAge: any = (birthdate: string) => {
    return getAgePackage(birthdate);
}

export {
    getAge,
}
// const {getAge, generateUUID} = require('../plugins');

const buildMakePerson = ({ generateUUID, getAge }) => {
    return ({ name, birthday }) => {
        return {
            id: generateUUID(),
            name: name,
            birthdate: birthday,
            age: getAge(birthday)
        }
    }
}

module.exports = {
    buildMakePerson,
}
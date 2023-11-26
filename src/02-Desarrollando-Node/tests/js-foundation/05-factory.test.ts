import { buildMakePerson } from "../../src/js-foundation/05-factory";;

describe('Factory Tests', () => {

    const getAge = (birthdate: string) => 20;
    const generateUUID = () => "";

    test('buildMakePerson should return a Function', () => {
        const makePerson = buildMakePerson({ getAge, generateUUID });
        expect(typeof makePerson).toBe('function');
    });

    test('makePerson should return a Person', () => {
        const makePerson = buildMakePerson({ getAge, generateUUID });
        const name = "Tomás";
        const birthdate = "2003-06-23";
        const person = makePerson({ name: name, birthday: birthdate });

        expect(person).toEqual({
            id: "",
            name: name,
            birthdate: birthdate,
            age: 20
        });
    });
});
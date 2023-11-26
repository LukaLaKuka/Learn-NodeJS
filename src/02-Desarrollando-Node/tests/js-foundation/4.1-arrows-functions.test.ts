import { arrowFunction1, arrowFunction2, arrowFunction3, arrowFunction4, arrowFunction5, arrowFunction6, myObject } from "../../src/js-foundation/04.1-arrow-functions";

describe('Testing Own Arrow Functions', () => {
    
    test('Arrow Function 1 Success', () => {
        expect(arrowFunction1()).toEqual('Hola');
    });

    test('Should give next number given', () => {
        expect(arrowFunction2(1)).toEqual(2);
        expect(arrowFunction3(2)).toEqual(3);
    });

    test('Should Adds two numbers', () => {
        expect(arrowFunction4(1, 2)).toEqual(3);
        expect(arrowFunction5(3, 2)).toEqual(5);
    });

    test('Should give Hola Object', () => {
        expect(arrowFunction6()).toEqual({hola: "Hola"});
    });

    test('MyObject Tests', () => {
        expect(myObject.name).toEqual("objeto");
        expect(myObject.saludar()).toEqual("Hola!");
        expect(myObject.despedir("Adiós!")).toEqual("Adiós!");
    });
});
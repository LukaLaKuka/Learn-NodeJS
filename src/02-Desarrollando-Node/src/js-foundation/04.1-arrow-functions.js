"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myObject = exports.arrowFunction6 = exports.arrowFunction5 = exports.arrowFunction4 = exports.arrowFunction3 = exports.arrowFunction2 = exports.arrowFunction1 = void 0;
const arrowFunction1 = () => {
    return "Hola";
};
exports.arrowFunction1 = arrowFunction1;
const arrowFunction2 = (a) => a + 1;
exports.arrowFunction2 = arrowFunction2;
const arrowFunction3 = (a) => { return a + 1; };
exports.arrowFunction3 = arrowFunction3;
const arrowFunction4 = (a, b) => a + b;
exports.arrowFunction4 = arrowFunction4;
const arrowFunction5 = (a, b) => { return a + b; };
exports.arrowFunction5 = arrowFunction5;
const arrowFunction6 = () => ({ hola: "Hola" });
exports.arrowFunction6 = arrowFunction6;
const myObject = {
    name: "objeto",
    saludar: () => "Hola!",
    despedir: (message) => {
        return message;
    }
};
exports.myObject = myObject;
console.log(arrowFunction1());
console.log(arrowFunction2(1));
console.log(arrowFunction3(3));
console.log(arrowFunction4(2, 2));
console.log(arrowFunction5(2, 2));
console.log(arrowFunction6());
console.log(myObject.saludar());
console.log(myObject.despedir("Adioss"));

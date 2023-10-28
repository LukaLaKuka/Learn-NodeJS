const arrowFunction1 = () => {
    return "Hola";
}

const arrowFunction2 = a => a + 1;

const arrowFunction3 = a => { return a + 1 };

const arrowFunction4 = (a, b) => a + b;

const arrowFunction5 = (a, b) => {return a + b };

const arrowFunction6 = () => ({ hola: "Hola" });

const myObject = {
    name: "objeto",
    saludar: () => "Hola!",
    despedir: (message) => {
        return message
    }
};

console.log(arrowFunction1());
console.log(arrowFunction2(1));
console.log(arrowFunction3(3));
console.log(arrowFunction4(2, 2));
console.log(arrowFunction5(2, 2));
console.log(arrowFunction6());
console.log(myObject.saludar());
console.log(myObject.despedir("Adioss"));
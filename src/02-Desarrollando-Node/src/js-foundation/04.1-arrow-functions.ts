const arrowFunction1 = (): string => {
    return "Hola";
}

const arrowFunction2 = (a: number): number => a + 1;

const arrowFunction3 = (a: number): number => { return a + 1 };

const arrowFunction4 = (a: number, b: number): number => a + b;

const arrowFunction5 = (a: number, b: number): number => {return a + b };

const arrowFunction6 = (): {hola: string} => ({ hola: "Hola" });

const myObject: {name: string, saludar: Function, despedir: Function} = {
    name: "objeto",
    saludar: () => "Hola!",
    despedir: (message: string): string => {
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
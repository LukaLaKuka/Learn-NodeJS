/**
 * Ejercicio para contar las palabras que hay dentro de un fichero:
 */

const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, "./readme.md"), 'utf-8');

// Mi solución
const totalWords1 = data.toLowerCase().split("react");

// Solución del profe
const totalWords2 = data.match(/react/gi ?? []);

console.log(`El fichero readme.md tiene un total de ${totalWords1.length - 1} veces la palabra "react"`);


["asfgahjfbgauywfgtaifbauyftwauyfa", "agsfyuafgiawftauywfaf", "ghfasukgfka"]
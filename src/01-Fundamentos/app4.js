console.log('Inicio de programa');

setTimeout( () => {
    console.log('Primer Timeout');
}, 10000 );

// leo fichero

setTimeout( () => {
    console.log('Segundo Timeout');
}, 3000 );

setTimeout( () => {
    console.log('Tercer Timeout');
}, 0 );

console.log('Fin de programa');
const fs = require('fs');

console.log('1 - Vamos a leer un archivo!');

fs.readFile('./my.json', '', function(err, fileContain){
    if(err) {
        console.log(err);
        return;
    }

    console.log('2 - Contenido del archivo');
    console.log(fileContain);
});

console.log('3 - Termino de leer');
const fs = require('fs');
const path = require('path');

console.log('Inicio de sinc');
const dir = path.join(__dirname, 'imagenes');

fs.readdir(dir, function(err, misArchivitos){
    if(err) {
        console.log(err);
        return;
    }

    console.log('Los archivos son: ');
    console.log(misArchivitos);
});

console.log('Fin de sinc');
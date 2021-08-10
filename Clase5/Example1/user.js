const fs = require('fs');

function listarUsuarios(){
    //Retornar la promise
    return new Promise(function(okCallback, failCallback){
        //Leo el archivo JSON
        fs.readFile('./users.json', '', function(err, users){
            //ERROR?
            if(err) {
                //Ejecutar nuestro error callback de nuestra promise
                failCallback(err);
            } else {
                //SUCCESS
                const usersJSON = JSON.parse(users);
                //Ejecutar okCallback con los usuarios
                okCallback(usersJSON);
            }
        });
    });
}

module.exports = {
    listarUsuarios
}
const user = require('./user');

//Ejecutar el metodo
user.listarUsuarios().then(function(users){
    //OK
    console.log(users);
}, function(error){
    //ERROR
    console.log(error);
});
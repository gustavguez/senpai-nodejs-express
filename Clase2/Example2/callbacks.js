function listarUsuarios(callback){
    //Traer usuarios
    const usuarios = ['Gustavo', 'Alejandro'];
    callback(usuarios);
}

listarUsuarios(function(usuarios){
    console.log(usuarios)
});
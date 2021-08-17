const express = require('express');
const usuariosRouter = express.Router();

//Definimos ruta /usuarios
usuariosRouter.get('/', function(req, res){
    res.send('LISTADO DE USUARIOS');
});

//Definimos ruta /usuarios/destacados
usuariosRouter.get('/destacados', function(req, res){
    res.send('LISTADO DE USUARIOS DESTACADOS');
});

module.exports = usuariosRouter;
const express = require('express');
const noticias = require('../noticias');
const noticiasRouter = express.Router();

//Definimos ruta /noticias
noticiasRouter.get('/', function(req, res){
    //console.log(req.query)
    res.send(noticias);
});

//Definimos ruta /noticias/destacadas
noticiasRouter.get('/destacadas', function(req, res){
    //console.log(req.query)
    res.send(noticias);
});

//Definimos ruta /noticias/:id
noticiasRouter.get('/:id', function(req, res){
    const noticiaId = parseInt(req.params.id);
    let resultado = null;

    //Foreach
    noticias.forEach(function(noticia){
        if(noticia.id === noticiaId){
            resultado = noticia;
        }
    });
    
    //Send to client
    res.send(resultado);
});

module.exports = noticiasRouter;
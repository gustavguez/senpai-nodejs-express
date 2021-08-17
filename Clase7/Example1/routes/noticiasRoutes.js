const express = require('express');
const noticias = require('../noticias');
const noticiasRouter = express.Router();

//Definimos ruta /noticias (GET)
noticiasRouter.get('/', function(req, res){
    //console.log(req.query)
    res.send(noticias);
});

//Definimos ruta para agregar noticia /noticias (POST)
noticiasRouter.post('/', function(req, res){
    //Creamos un obj con la nueva noticia
    const nuevaNoticia = {
        id: null,
        title: req.body.title
    };

    //Agregamos al array de noticias
    noticias.push(nuevaNoticia);

    //Respondemos con la nueva noticia
    res.send(nuevaNoticia);
});

//Definimos ruta /noticias/destacadas (GET)
noticiasRouter.get('/destacadas', function(req, res){
    //console.log(req.query)
    res.send(noticias);
});

//Definimos ruta /noticias/:id (GET)
noticiasRouter.get('/:id', function(req, res){
    const noticiaId = parseInt(req.params.id);
    let resultado = null;

    //Foreach
    noticias.forEach(function(noticia){
        if(noticia.id === noticiaId){
            resultado = noticia;
        }

        if(noticia.id === 5){
            console.log('Hola');
        }
    });
    
    //Send to client
    res.send(resultado);
});

module.exports = noticiasRouter;
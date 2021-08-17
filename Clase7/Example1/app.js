const express = require('express');
const noticias = require('./noticias');

//Creamos la app de express
const app = express();

//Definimos ruta /noticias
app.get('/noticias', function(req, res){
    //console.log(req.query)
    res.send(noticias);
});

//Definimos ruta /noticias/:id
app.get('/noticias/:id', function(req, res){
    const noticiaId = parseInt(req.params.id);
    let resultado = null;

    //Foreach
    noticias.forEach(function(noticia){
        if(noticia.id === noticiaId){
            resultado = noticia;
        }
    });

    // const noticia = noticias.find(function(noticia){
    //     return noticia.id === noticiaId;
    // });
    
    //Send to client
    res.send(resultado);
});

//Iniciar servidor http
app.listen(4000);
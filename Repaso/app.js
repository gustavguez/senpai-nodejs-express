const express = require('express');

const app = express();
const port = 4000;

//DEFINIR UN MIDDLEWARE PARA / QUE IMPRIMA HOLA EN CONSOLA
app.use(function(req, res, next){
    req.loggedUser = 'SENPAI';
    next();
});

app.get('/', function(request, res){
    res.send('Hola desde express GET / ' + request.loggedUser);
});
app.get('/error', function(request, res){
    // ------ ERROR 
    req.hola = 'asdsd';
    // ------ ERROR
    res.send('Hola desde express GET /error ' + request.loggedUser);
});

app.get('/home', function(request, response){
    const consulta = request.query.q;
    response.send('Hola home ' + request.loggedUser + ' / ' + consulta);
});

app.get('/productos/:productoId/listado/:idlistado', function(req, res){
    res.send('Hola productos ' + req.params.productoId + ' ' + req.params.idlistado  + ' ---- '  + req.loggedUser);
});

app.get('/*', function(req, res){
    res.status(404);
    res.send('RUTA NO ENCONTRADA');
});

//DEFINIMOS UN MIDDLEWARE PARA MOSTRAR ERRORES
app.use(function(err, req, res, next){
    res.status(400);
    res.send('Ooops ocurrió un error!');
});

app.listen(port);
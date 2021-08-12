const express = require('express');
const path = require('path');

//CREATE EXPRESS APP
const app = express();

//USE STATIC FILES MIDDLEWARE
app.use(express.static(path.join(__dirname, 'public')));

//MIDDLEWARE GLOBAL
app.use(function(request, response, next){
    request.now = new Date();
    next();
});

//PATH /TIENDA
app.get('/', function(request, response) {
    response.send('Home');
});

//PATH /TIENDA
app.get('/tienda', function(request, response) {
    console.log(request.now);
    response.send('Listado de productos');
});

//START LISTEN
app.listen(4000);
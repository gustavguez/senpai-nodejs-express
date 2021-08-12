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
app.get('/tienda', function(request, response, next) {
    setTimeout(function(){
        try {
            miOBjQueNOexiste.name = 'Ooops!';
            response.send('No estas autorizado!');
        } catch (error) {
            next(error);
        }
    }, 1000)
});

//MIDDLEWARE GLOBAL ERROR MANAGER
app.use(function(error, request, response, next){
    response.status(400);
    response.send('Oops ocurrió un error!');
});

//START LISTEN
app.listen(4000);
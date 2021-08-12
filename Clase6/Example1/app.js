const express = require('express');
const logger = require('./logger');

//CREATE EXPRESS APP
const app = express();

//LOGGER MIDDLEWARE
app.use(logger.log);

//BODY PARSE AS JSON MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

//PATH /TIENDA
app.get('/tienda', function(request, response) {
    response.send('Listado de productos');
});

//PATH /TIENDA/ID
app.get('/tienda/:producId', function(request, response) {
    response.send('Product IDENTIFIER: ' + request.params.producId);
});

//START LISTEN
app.listen(4000);
const express = require('express');

const app = express();

app.use(function(request, response, next) {
    console.log('PASO POR EL MIDDLEWARE');
    next();
});

app.get('/tienda', function(request, response) {
    response.send('Listado de productos');
});

app.get('/tienda/:producId', function(request, response) {
    response.send('Product IDENTIFIER: ' + request.params.producId);
});

app.listen(4000);
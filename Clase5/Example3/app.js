const express = require('express');

const app = express();

//MIDDLEWARE GLOBAL
app.use(function(request, response, next) {
    console.log('PASO POR EL MIDDLEWARE');
    next();
});

app.get('/noticias/:noticiaId', function(request, response) {
    response.send(request.params.noticiaId);
});

app.listen(4000);
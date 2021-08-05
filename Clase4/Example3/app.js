const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.send('Hola desde express GET /');
});

app.get('/users', function(req, res){
    res.send('Hola desde express GET /users');
});

app.listen(4000);
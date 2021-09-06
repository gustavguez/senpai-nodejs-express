const express = require('express');
const path = require('path');

// Create our Express app
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// Base middlewares
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// Define routes
app.get('/', function(req, res){
    //Render using EJS
    res.render('inicio', {
        title: 'Senpai! Home'
    });
});
app.get('/productos', function(req, res){
    const products = [
        { id: 1, title: 'Curso HTML'},
        { id: 2, title: 'Curso CSS'}
    ]
    //Render using EJS
    res.render('productos', {
        title: 'Senpai! Cursos',
        products: products
    });
});

// Start server
const port = 4000;
const server = app.listen(port, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
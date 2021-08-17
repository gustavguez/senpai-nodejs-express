const express = require('express');

//Incluir nuestro router
const noticiasRoutes = require('./routes/noticiasRoutes');
const usuariosRoutes = require('./routes/usuariosRoutes');

//Creamos la app de express
const app = express();

// Takes the raw requests and turns them into usable properties on req.body
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//Usar las rutas
app.use('/noticias', noticiasRoutes);
app.use('/usuarios', usuariosRoutes);

//Iniciar servidor http
app.listen(4000);
const express = require('express');

//Incluir nuestro router
const noticiasRoutes = require('./routes/noticiasRoutes');

//Creamos la app de express
const app = express();

//Usuar las rutas
app.use('/noticias', noticiasRoutes);

//Iniciar servidor http
app.listen(4000);
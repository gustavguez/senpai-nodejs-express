const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');

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

//Variables
const misproductos = [
    {
        id: 1,
        titulo: 'Iphone 12',
        imagen: 'https://tienda.antel.com.uy/razuna/assets/1/DD4F296114664C8BB4F646C566B13C83/img/B41EE244C8C443749E9E50534A45B8BC/iPhone12-2_B41EE244C8C443749E9E50534A45B8BC.jpg',
        descripcion: 'Celu iphone'
    },
    {
        id: 2,
        titulo: 'Iphone 8',
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_784243-MLA44156685866_112020-O.jpg',
        descripcion: 'Celu iphone'
    },
    {
        id: 3,
        titulo: 'Iphone XR',
        descripcion: 'Celu iphone'
    },
    {
        id: 4,
        titulo: 'Iphone 6',
        descripcion: 'Celu iphone'
    }
];
const usuarios = [];

// Define routes
app.get('/', function(req, res){
    //Render using EJS
    res.render('inicio', {
        title: 'Senpai! Home',
        productos: misproductos
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

app.get('/miproducto/:id', function(req, res){
    const id = req.params.id;
    let miproducto = {};

    //Buscar el prodcuto en misproducts
    misproductos.forEach(function(producto){
        if(producto.id === parseInt(id)){
            miproducto = producto;
        }
    });

    //Render using EJS
    res.render('producto', {
        producto: miproducto
    });
});

app.get('/signup', function(req, res){
    //Render using EJS
    res.render('signup', {
        title: 'Senpai! Registro'
    });
});
app.post('/signup', async function(req, res){
    const usuario = req.body;

    //Hash la clave
    usuario.clave = await bcrypt.hash(req.body.clave, 10);

    //Validar valores
    usuarios.push(usuario);
    
    //Render using EJS
    res.render('signup', {
        title: 'Senpai! Registro'
    });
});

app.get('/login', function(req, res){
    //Render using EJS
    res.render('login', {
        title: 'Senpai! Iniciar sesión'
    });
});

app.post('/login', async function(req, res){
    const usuario = req.body.usuario; //Senpai
    const clave = req.body.clave; // 123
    let usuarioObj = null;
    let resultado = false;

    //Buscar el usuario con ese nombre de usuario
    usuarios.forEach(function(usr){
        if(usr.usuario === usuario){ //.usuario === 'Senpai'
            usuarioObj = usr; //{usuario: "Senpai", nombre: 'Senpai Academy', clave: 'HASH'}
        }
    });

    //Asegurarme que encontre el usuario
    if(usuarioObj !== null) {
        //Es cuando usuarioObj no es null
        //Validat usuarioObj.clave === clave //formulario
        //usuarioObj.clave HASH
        //clave 123
        resultado = await bcrypt.compare(clave, usuarioObj.clave);
    }

    //Si resultado es true redirect to home
    if(resultado){
        res.redirect('/');
        return;
    }
    
    res.render('login', {
        title: 'Senpai! Iniciar sesión'
    });
});

// Start server
const port = 4000;
const server = app.listen(port, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
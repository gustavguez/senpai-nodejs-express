//Requerimos express
const express = require('express');
const path = require('path');
const multer = require('multer');

//Crear nuestra app de express
const app = express();

//Indicar al express que use EJS como motor de renders
app.set('view engine', 'ejs');

//Inicializar multer con dest como opción
const uploadMiddleware = multer({ dest: 'public/uploads' });

//Extender express para que pueda parsear el body
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//Decimos que todo lo que esta en una carpeta, lo sirva como archivo estatico
app.use(express.static(path.join(__dirname, 'public')));

//Declaramos una variable para guardar los usuarios
const users = [
    {
       "id": 1,
       "name": "Senpai"
    }
];

//Declaramos una variable para listar blogs
const blogs = [
    {
        "id": 1,
        "title": "Mi blog desde variable 1",
        "description": "Mi blog descption desde variable 1"
    },
    {
        "id": 2,
        "title": "Mi blog desde variable 2",
        "description": "Mi blog descption desde variable 2"
    }
];

//Definir ruta /users GET
app.get('/users', function(req, res) {
    //buscar los users a la db
    res.send(users);
});

//Definir ruta /signup POST
// app.use('/signup', uploadMiddleware.single('avatar'))
app.post('/signup', 
    // 1- MULTER guarda en disco el archivo envíado en avatar
    uploadMiddleware.single('avatar'),
    // 2- CALLBACK DE RUTA/PATH
    function(req, res) {
        //NORMAL FLOW
        const id = users.length + 1;
        const name = req.body.name;
        const newUser = {
            "id": id,
            "name": name
        };

        //Validamos que el nombre no esté vacío
        if(newUser.name){
            //Push nuevo usuario al array
            //En memoria
            users.push(newUser);
        
            //Rsponse
            //res.send(newUser);
            res.redirect('/signup')
        } else {
            //Creamos el mensaje a envíar
            const response = {
                "error": "Debes mandar el nombre del usuario"
            };

            //Mandar status 
            res.status(400);
            res.send(response);
        }
    }
);

//Definimos ruta /signup GET
app.get('/signup', function(req, res){
    //Mandamos el archivo signup.html
    res.sendFile(path.join(
        __dirname, 'views','signup.html'
    ));
});

//Definimos ruta /blogs GET
app.get('/blogs', function(req, res){
    //Mandamos el archivo blogs.html
    res.render('blogs', {
        "blog": {
            "id": 2,
            "title": "Mi blog desde variable 2 !!!! ",
            "description": "Mi blog descption desde variable 2 asdasd"
        }
    });
    // res.sendFile(path.join(
    //     __dirname, 'views','blogs.html'
    // ));
});

//Iniciar / escuchar en puerto XXXX
app.listen(4000, function(){
    console.log('El servidor se levantó correctamente!');
});
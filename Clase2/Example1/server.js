const http = require('http');
const port = 4000;

const server = http.createServer(function(req, res) {
    res.statusCode = 200;
    //Method -> BD -> usuario
    const user = 'Manolo';
    res.end('<html><head></head><body><h1 style="color: red">Hola desde Node 2: ' + user + '</h1></body></html>');
});

server.listen(port, function(){
    console.log('SERVER está escuchando en puerto ' + port);
});
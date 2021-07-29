const http = require('http');
const port = 4000;

const server = http.createServer(function(req, res) {
    res.statusCode = 200;
    res.end(JSON.stringify({ name: 'Senpai', lastName: 'Academy'}));
});

server.listen(port, function(){
    console.log('SERVER está escuchando en puerto ' + port);
});
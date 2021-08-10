const express = require('express');
const user = require('./user');

const app = express();

app.get('/users', async function(req, res) {
    // user.listarUsuarios().then(function(users){
    //     res.send(users);
    // })
    const usersJSON = await user.listarUsuarios();
    res.send(usersJSON);
});

app.listen(4000);
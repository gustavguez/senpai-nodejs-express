const users = require('../data/users');

const listUsers = (req, res) => {
    //Render users
    res.render('users', {
        users: users
    });
};

module.exports = {
    listUsers
};
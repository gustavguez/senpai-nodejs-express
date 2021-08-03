const express = require('express');
const path = require('path');

// Controllers
const userController = require('./controllers/userController');
const groupController = require('./controllers/groupController');

// Create our Express app
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// Serves up static files from the public folder. Anything in public/ will just be served up as the file it is
app.use('/', express.static(path.join(__dirname, 'public')));

// Takes the raw requests and turns them into usable properties on req.body
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// Define routes
app.get('/users', userController.listUsers);
app.get('/api/groups', groupController.listGroups);
app.post('/api/groups', groupController.addGroup);

// Start server
const port = 4000;
const server = app.listen(port, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
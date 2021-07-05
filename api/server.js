// BUILD YOUR SERVER HERE
const express = require('express'); // import the express package
const User = require('./users/model'); // import users
const server = express(); // creates the server
server.use(express.json()); // makes server parse json

module.exports = server; // EXPORT YOUR SERVER instead of {}
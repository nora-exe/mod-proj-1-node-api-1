// BUILD YOUR SERVER HERE
const express = require('express'); // import the express package
const User = require('./users/model'); // import users
const server = express(); // creates the server
server.use(express.json()); // makes server parse json

//🔽 GET users
server.get('/api/users', (req, res) => {
    User.find()
    .then(users => {
        res.json(users);
    })
    .catch(err => {
        res.status(500).json({
            message: 'The users information could not be retrieved',
            err: err.message
        })
    })
})

//🔽 GET user by id
server.get('/api/users/:id', (req, res) => {
    
})

//🔽 POST (add) user
server.get('api/users', (req, res) => {
    
})

//🔽 DEL user
server.get('/api/users/:id', (req, res) => {
    
})

//🔽 PUT (update) user
server.get('/api/users/:id', (req, res) => {
    
})

// EXPORT ➡ SERVER
module.exports = server;
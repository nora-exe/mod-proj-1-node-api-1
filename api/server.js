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
    User.findById(req.params.id)
        .then(user => {
            if (!user) {
                res.status(404).json({
                    message: "The user with the specified ID does not exist"
                })
            }
            res.json(user)
        })
        .catch(err => {
            res.status(404).json({
                message: "The user with the specified ID does not exist",
                err: err.message
            })
        })
})

//🔽 POST (add) user
server.post('/api/users', (req, res) => {
    const user = req.body;
    if (!user.name || !user.bio) {
        res.status(400).json({
            message: 'Please provide name and bio for the user'
        })
    } else {
        User.insert(user)
            .then(newUser => {
                res.status(201).json(newUser);
            })
            .catch(err => {
                res.status(500).json({
                    message: 'There was an error while saving the user to the database',
                    err: err.message
                })
        })
    }
})

//🔽 DEL user
server.get('/api/users/:id', (req, res) => {
    
})

//🔽 PUT (update) user
server.get('/api/users/:id', (req, res) => {
    
})

// EXPORT ➡ SERVER
module.exports = server;
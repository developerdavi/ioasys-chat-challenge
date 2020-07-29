const express = require('express')
const UserController = require('../controllers/user')
const MessageController = require('../controllers/message')

const routes = express.Router()

// USERS
routes.get('/users', UserController.index)

// MESSAGES
routes.post('/message', MessageController.sendMessage)

module.exports = routes

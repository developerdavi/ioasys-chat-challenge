const express = require('express')
const UserController = require('../controllers/user')

const routes = express.Router()

// USERS
routes.post('/users/create', UserController.create)
routes.post('/users/login', UserController.login)

module.exports = routes

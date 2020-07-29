const express = require('express')

const public = require('./public')
const private = require('./private')
const authMiddleware = require('../middlewares/auth')

const routes = express.Router()

routes.use(public)

routes.use(authMiddleware)

routes.use(private)

routes.all('*', (_req, res) => {
  res.status(404).json({ error: 'Unknown route' })
})

module.exports = routes

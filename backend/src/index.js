const express = require('express')
const http = require('http')
const dotenv = require('dotenv')
const socketio = require('socket.io')

dotenv.config()

// Local modules
const Database = require('./services/database')
const middlewares = require('./middlewares')
const kafkaService = require('./services/kafka')

Database.connect()

const app = express()
const server = http.Server(app)
const io = socketio(server)

kafkaService(io)

app.use((req, _res, next) => {
  req.websockets = io
  next()
})

app.use(middlewares)

const PORT = process.env.PORT || 3000

process.on('SIGINT', async () => {
  await Database.disconnect()
  process.exit(0)
})

module.exports = server.listen(PORT, () => {
  console.log(`[!] Core API running on port ${PORT}`)
})

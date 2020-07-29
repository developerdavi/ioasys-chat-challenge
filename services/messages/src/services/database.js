const mongoose = require('mongoose')

const settings = {
  poolSize: 4,
  keepAlive: true,
  keepAliveInitialDelay: 300000,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  autoIndex: true,
  useFindAndModify: false
}

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/chatty'

async function connect() {
  await mongoose.connect(MONGO_URI, settings)
  console.log('[!] Database successfully connected')
}

async function disconnect() {
  await mongoose.disconnect()
  console.log('[!] Database successfully disconnected')
}

const Database = { connect, disconnect }

module.exports = Database

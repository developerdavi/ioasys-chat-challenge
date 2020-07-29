const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'core-api',
  brokers: process.env.KAFKA_BROKERS.split(',')
})

const consumer = kafka.consumer({ groupId: 'core-api-consumer-group' })

const handlers = {
  'send-message-return': (io, msg) => {
    const message = JSON.parse(msg.value)
    console.log(`Key: ${msg.key} - ${JSON.parse(message)}`)
    io.to(message.to).emit('message', message)
  },
  'create-room-return': (io, msg) => {
    const message = JSON.parse(msg.value)
    io.emit('new-room', message)
  }
}

/**
 * Used for getting Kafka funcionalities
 * @param {SocketIO} io A socket.io instance
 */
const kafkaService = async (io) => {
  await consumer.connect()
  await consumer.subscribe({ topic: 'send-message-return' })

  consumer.run({
    eachMessage: ({ topic, message }) => {
      handlers[topic](io, message)
    }
  })
}

module.exports = kafkaService

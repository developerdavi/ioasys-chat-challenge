const { Kafka, logLevel } = require('kafkajs')
const Database = require('./services/database')
const MessageSendingHandler = require('./handlers/messageSending')

const kafka = new Kafka({
  clientId: 'messages-service',
  brokers: ['localhost:9092', 'kafka:9092'],
  logLevel: logLevel.NOTHING
})

const consumers = {
  'send-message': MessageSendingHandler
}

const setupConsumers = async () => {
  for (const topic in consumers) {
    const consumer = kafka.consumer({ groupId: `${topic}-group` })
    await consumer.connect()
    await consumer.subscribe({ topic })

    const producer = kafka.producer()
    await producer.connect()
  
    await consumer.run({
      eachMessage: async ({ message }) => {
        console.log(`Received message ${message.key} on topic "${topic}"`)
        const { key, value } = await consumers[topic]({ value: JSON.parse(message.value), key: message.key })
        await producer.send({
          topic: `${topic}-return`,
          messages: [{ key, value: JSON.stringify(value) }]
        })
      }
    })
  }
}

const setupService = () => {
  setupConsumers()
  
  Database.connect()
}

setupService()

const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'core-api',
  brokers: process.env.KAFKA_BROKERS.split(',')
})

const producer = kafka.producer()

const kafkaMiddleware = async (req, _res, next) => {
  req.producer = producer

  next()
}

module.exports = kafkaMiddleware

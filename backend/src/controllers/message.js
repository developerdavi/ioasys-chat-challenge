const yup = require('yup')
const { v4: uuid } = require('uuid')

const messageSchema = yup.object().shape({
  from: yup.string().required('From field is required'),
  to: yup.string().required('To field is required'),
  content: yup.string().required('Content field is required')
})

class MessageHandler {
  static async sendMessage(req, res) {
    try {
      const message = messageSchema.validateSync(req.body)

      message.key = uuid()

      await req.producer.send({
        topic: 'send-message',
        messages: [
          { key: message.key, value: JSON.stringify(message) }
        ]
      })

      req.websockets.emit('message', message)

      res.sendStatus(201)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  static async getMessages(req, res) {
    const { room } = req.query

    if (!room) {
      return res.status(400).json({ error: 'Room field is required' })
    }

    try {
      
    } catch (error) {
      
    }
  }
}

module.exports = MessageHandler

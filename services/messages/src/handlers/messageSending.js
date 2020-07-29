const Message = require('../models/message')

const MessageSendingHandler = async ({ key, value }) => {
  try {
    const message = new Message(value)

    await message.save()

    return { key, value: message }
  } catch (error) {
    return { key, value: { error: error.message } }
  }
}

module.exports = MessageSendingHandler

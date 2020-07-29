const { Schema, model } = require('mongoose')

const messageSchema = new Schema({
  from: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

const Message = model('messages', messageSchema)

module.exports = Message

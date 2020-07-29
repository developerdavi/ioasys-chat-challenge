const { Schema, model } = require('mongoose')

const roomSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  owner: {
    type: Schema.Types.ObjectId,
    required: true
  },
  participants: [{
    type: Schema.Types.ObjectId,
    required: true
  }]
}, {
  timestamps: true
})

const Room = model('rooms', roomSchema)

module.exports = Room

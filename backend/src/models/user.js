const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  fullname: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: true
  },
  tokens: [{
    token: {
      type: String,
      required: true
    }
  }]
}, {
  timestamps: true
})

userSchema.statics.findByCredentials = async function(username, password) {
  const user = await User.findOne({ username })

  if (!user) {
    throw new Error('User does not exist')
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password)

  if (!isPasswordMatch) {
    throw new Error('Invalid login credentials')
  }

  return user
}

userSchema.methods.generateAuthToken = async function() {
  const user = this

  const { _id } = user

  const token = jwt.sign({ _id }, process.env.JWT_KEY)

  user.tokens.push({ token })

  await user.save()

  return token
}

userSchema.pre('save', async function(next) {
  const user = this

  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8)
  }

  next()
})

const User = model('users', userSchema)

module.exports = User

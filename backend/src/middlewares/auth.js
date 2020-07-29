const jwt = require('jsonwebtoken')

const User = require('../models/user')

const authMiddleware = async (req, res, next) => {
  if (!req.header('Authorization')) {
    return res.status(401).json({ error: 'No authorization header' })
  }

  const token = req.header('Authorization').replace('Bearer ', '')

  let data = { }

  try {
    data = jwt.verify(token, process.env.JWT_KEY)
  } catch (error) {
    return res.status(403).json({ error: 'Invalid authorization token', token })
  }

  try {
    const user = await User.findOne({ _id: data._id, 'tokens.token': token }).lean()

    if (!user) {
      throw new Error('User not found')
    }

    req.user = user
    req.token = token

    next()
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = authMiddleware

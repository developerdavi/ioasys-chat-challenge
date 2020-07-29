const yup = require('yup')
const User = require('../models/user')

const userSchema = yup.object().shape({
  username: yup.string().required('Username field is required'),
  fullname: yup.string().required('Full name field is required'),
  password: yup.string()
    .min(8, 'Password field should have at least 8 characters')
    .max(16, 'Password field should have a maximum of 16 characters')
    .required('Password field is required')
})

const loginSchema = yup.object().shape({
  username: yup.string().required('Username field is required'),
  password: yup.string().required('Password field is required')
})

class UserController {
  static async index(req, res) {
    const user = await User.find(req.query, { username: 1, fullname: 1 })

    res.json(user)
  }

  static async create(req, res) {
    try {
      const data = userSchema.validateSync(req.body)

      const exists = await User.findOne({ username: data.username })

      if (exists) {
        throw new Error('An user with the same username already exists')
      }

      const user = new User(data)

      await user.save()

      res.sendStatus(201)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  static async login(req, res) {
    try {
      const data = loginSchema.validateSync(req.body)

      const { username, password } = data

      const user = await User.findByCredentials(username, password)

      const token = await user.generateAuthToken()

      res.json({ type: 'Bearer', token })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}

module.exports = UserController

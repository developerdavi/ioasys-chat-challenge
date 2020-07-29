const moment = require('moment')

const logMiddleware = (req, _res, next) => {
  console.log(`[${moment().format('DD/MM/YYYY HH:mm')}] ${req.method} ${req.path}`)
  next()
}

module.exports = logMiddleware

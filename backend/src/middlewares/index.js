const express = require('express')
const cors = require('cors')
const routes = require('../routes')
const logMiddleware = require('./logging')
const kafkaMiddleware = require('./kafka')

const router = express.Router()

router.use(cors())
router.use(express.json())

router.use(logMiddleware)
router.use(kafkaMiddleware)
router.use(routes)

module.exports = router

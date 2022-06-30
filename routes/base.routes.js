const express = require('express')
const router = express.Router()

const createController = require('../controllers/create.controller')
const readController = require('../controllers/read.controller')

router.use('/', readController)
router.use('/', createController)

module.exports = router

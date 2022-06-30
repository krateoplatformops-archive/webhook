const express = require('express')
const helmet = require('helmet')
const cors = require('cors')({ origin: true })

const { discordPublish } = require('./helpers/discord.helpers')

const app = express()
app.use(helmet())
app.use(cors)
app.use(express.json())

/* Middleware */
const callLogger = require('./middlewares/call-logger.middleware')
const authMiddleware = require('./middlewares/auth.middleware')

app.use(callLogger)
app.use(authMiddleware)

/* Routes */
const baseRoutes = require('./routes/base.routes')

app.use('/', baseRoutes)

module.exports = app

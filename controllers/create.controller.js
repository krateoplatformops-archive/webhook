const express = require('express')
const router = express.Router()

const { logger } = require('../helpers/logger.helpers')
const { discordPublish } = require('../helpers/discord.helpers')
const { twitterPublish } = require('../helpers/twitter.helpers')

router.post('/', async (req, res, next) => {
  try {
    const prj = req.body.project
    const tag = req.body.tag

    logger.info(`${prj}:${tag} - Publish`)

    discordPublish(prj, tag)
    twitterPublish(prj, tag)

    res.status(200).json({ message: 'ok' })
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

module.exports = router

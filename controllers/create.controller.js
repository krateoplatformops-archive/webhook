const express = require('express')
const router = express.Router()

const { discordPublish } = require('../helpers/discord.helpers')
const { twitterPublish } = require('../helpers/twitter.helpers')

router.post('/', async (req, res, next) => {
  try {
    const prj = req.body.project
    const tag = req.body.tag

    await discordPublish(prj, tag)
    await twitterPublish(prj, tag)

    res.status(200).json({ message: 'ok' })
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

module.exports = router

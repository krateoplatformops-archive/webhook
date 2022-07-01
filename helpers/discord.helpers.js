const axios = require('axios').default
const { logger } = require('./logger.helpers')

const { discordConstants } = require('../constants')

const discordPublish = async (prj, tag) => {
  const d = {
    ...discordConstants
  }

  d.embeds[0].author.name = `${prj}`
  d.embeds[0].title = `${tag}`
  d.embeds[0].description = `The new version is out!`
  d.embeds[0].url = `https://github.com/krateoplatformops/${prj}/releases/tag/${tag}`

  try {
    await axios.post(process.env.DISCORD_WEBHOOK, d)
    logger.info(`${prj}:${tag} - Discord success`)
  } catch (err) {
    logger.error(JSON.stringify(err))
  }
}

module.exports = {
  discordPublish
}

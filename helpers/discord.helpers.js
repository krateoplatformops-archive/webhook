const axios = require('axios').default

const { discordConstants } = require('../constants')

const discordPublish = async (project, tag) => {
  const d = {
    ...discordConstants
  }

  d.embeds[0].author.name = `${project}`
  d.embeds[0].title = `${tag}`
  d.embeds[0].description = `The new version is out!`
  d.embeds[0].url = `https://github.com/krateoplatformops/${project}/releases/tag/${tag}`

  try {
    await axios.post(process.env.DISCORD_WEBHOOK, d)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  discordPublish
}

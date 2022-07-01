const { TwitterApi } = require('twitter-api-v2')
const { logger } = require('./logger.helpers')

const twitterPublish = async (prj, tag) => {
  const client = new TwitterApi({
    appKey: process.env.TWITTER_API_KEY,
    appSecret: process.env.TWITTER_API_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessSecret: process.env.TWITTER_ACCESS_SECRET
  })

  const url = `https://github.com/krateoplatformops/${prj}/releases/tag/${tag}`

  client.v1
    .tweet(`The release ${tag} of ${prj} is released. Check out more on ${url}`)
    .then((val) => {
      logger.info(`${prj}:${tag} - Twitter success`)
    })
    .catch((err) => {
      logger.error(JSON.stringify(err))
    })
}

module.exports = {
  twitterPublish
}

module.exports = (req, res, next) => {
  if (
    req.method === 'POST' &&
    req.headers['x-token'] !== process.env.API_TOKEN
  ) {
    res.status(401).send('Unauthorized')
    return
  }
  next()
}

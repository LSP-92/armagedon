const jwt = require('jsonwebtoken')

module.exports = (id) => {
  return jwt.sign({
    exp: Math.floor(Date.now() / 1000) + (60 * 60),
    data: id
  }, process.env.SECRETJWT);
}
const createHttpError = require('http-errors');
const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  if (!req.headers.authorization) {
    return next(createHttpError(401, 'INVALIDTOKEN'));
  }
  const tokenJwt = req.headers.authorization.replace('Bearer ', '');
  jwt.verify(tokenJwt, process.env.SECRETJWT, function (error, payload) {
    
    req.user = payload.data;

    if (error) {
      return next(createHttpError(401, 'INVALIDTOKEN'));
    }
    return next();
  });
};

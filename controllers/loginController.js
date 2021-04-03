const User = require('../models/Users');
const createError = require('http-errors');
const jwt = require('../lib/authJWT');

async function login(req, res, next) {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ email: username });

    if (!user) {
      return next(createError(404, 'Not Found data'));
    }

    if (!(await user.checkPasswd(password))) {
      return next(createError(404, 'Not Found data'));
    }
    const token = jwt(user._id);

    return res.status(200).append('Auhtorization', `${token}`).end();
  } catch (error) {
    next(createError(500, error));
  }
}

module.exports = login;

const User = require('../models/Users');
const formatResponse = require('../lib/formatResponse');
const createHttpError = require('http-errors');

async function createUser(req, res, next) {
  const { username, password } = req.body;
  try {
    const newUser = await User.encrypt({ email: username, password: password });

    if (newUser === 1) {
      return next(createHttpError(400));
    }
    res
      .status(201)
      .json(
        formatResponse(201, { ...newUser, password: 'xxxxxxxx' }, 'New user created')
      );
  } catch (error) {
    console.log(error);
  }
}

async function deleteUser(req, res, next) {
  try {
    const result = await User.deleteOne({ _id: req.user });
    res.status(200).json(formatResponse(200, result, result.deletedCount));
  } catch (error) {
    next(createHttpError(500));
  }
}

async function findAll(req, res, next) {
  console.log(req.query);
  try {
    const result = await User.filters(req.query);
    res.status(200).json(formatResponse(200, result, result.deletedCount));
  } catch (error) {
    console.log(error);

    next(createHttpError(500));
  }
}

async function updateUser(req, res, next) {
  const { username, password } = req.body;
  console.log(req.params)

  try {
    const upUser = await User.updateUser({email: req.params.user}, { email: username, password: password });
    res.status(200).json(formatResponse(upUser))    
  } catch (error) {
    next(createHttpError(500));
  }
}



module.exports = { createUser, deleteUser, findAll, updateUser};

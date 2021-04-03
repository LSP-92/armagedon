const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const formatResponse = require('./lib/formatResponse');

require('./lib/connectMongoDb');

const neasRouter = require('./routes/neas');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');

const authVerify = require('./middlewares/authJwt');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/login', loginRouter);
app.use('/user', usersRouter);
app.use('/neas', authVerify, neasRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.log(err)
  
  res.json(formatResponse(err.status, '', err.message)).end();
});

module.exports = app;

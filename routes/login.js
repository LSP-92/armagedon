const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const createError = require('http-errors');
const login = require('../controllers/loginController');

router.post(
  '/',
  body('username').isEmail(),
  body('password').isLength({ min: 6 }),
  (req, res, next) => {
    if (!validationResult(req).isEmpty()) {
      return next(createError(400, 'Bad Request'));
    }
    next();
  },
  login
);

module.exports = router;

const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/userController');
const jwtVerify = require('../middlewares/authJwt');

router.post(
  '/',
  body('username').isEmail(),
  body('password').isLength({ min: 6 }),
  userController.createUser
);

router.get('/all',jwtVerify, userController.findAll);

router.delete('/', jwtVerify, userController.deleteUser);

router.put('/:user', jwtVerify, userController.updateUser);

module.exports = router;

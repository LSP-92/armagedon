const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

const neasController = require('../controllers/neasController');
const Neas = require('../models/Neas');

router.post(
  '/',
  body('full_name').exists(),
  body('a').exists(),
  body('e').exists(),
  body('i').exists(),
  body('om').exists(),
  body('w').exists(),
  body('ma').exists(),
  (req, res, next) => {
    if (!validationResult(req).isEmpty()) {
      return next(createError(400, 'Bad Request'));
    }
    next();
  },
  neasController.createNeas
);

router.post('/addlist', neasController.addList);

router.get('/all', neasController.findAll);

router.delete('/:name', neasController.deleteNeas);

router.put('/:name', neasController.updateNeas);


module.exports = router;

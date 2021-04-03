const express = require('express');
const { user } = require('../lib/connectMongoDb');
const router = express.Router();

router.post('/', function (req, res, next) {
  res.status(200).json({ status: 'ok' });
});

router.post('/addlist', function (req, res, next) {
  res.status(200).json({ status: 'ok' });
});

router.get('/all', function (req, res, next) {
  res.status(200).json({ status: 'ok' });
});

router.delete('/', function (req, res, next) {
  res.status(200).json({ status: 'ok' });
});

router.put('/:username', function (req, res, next) {
  res.status(200).json({ status: 'ok' });
});


module.exports = router;

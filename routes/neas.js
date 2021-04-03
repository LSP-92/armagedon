var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
  res.status(200).json({ status: 'ok' });
});

router.post('/addlist', function (req, res, next) {
  res.status(200).json({ status: 'ok' });
});

router.get('/all', function (req, res, next) {
  res.status(200).json({ status: 'ok' });
});

router.delete('/:fullName', function (req, res, next) {
  res.status(200).json({ status: 'ok' });
});

router.put('/:fullName', function (req, res, next) {
  res.status(200).json({ status: 'ok' });
});

module.exports = router;

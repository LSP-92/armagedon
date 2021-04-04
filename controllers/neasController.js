const Neas = require('../models/Neas');
const formatResponse = require('../lib/formatResponse');
const createHttpError = require('http-errors');

async function createNeas(req, res, next) {
  try {
    const voNeas = new Neas(req.body);
    const nea = await voNeas.save();
    res.status(201).json(formatResponse(200, nea, 'Nea created'));
  } catch (error) {
    next(createHttpError(500));
  }
}

async function deleteNeas(req, res, next) {
  try {
    const result = await Neas.deleteOne({ full_name: req.params.name });
    res.status(200).json(formatResponse(200, result, result.deletedCount));
  } catch (error) {
    next(createHttpError(500));
  }
}

async function findAll(req, res, next) {
  console.log(req.query);
  try {
    const result = await Neas.filters(req.query);
    res.status(200).json(formatResponse(200, result, result.deletedCount));
  } catch (error) {
    next(createHttpError(500));
  }
}

async function updateNeas(req, res, next) {
  const payload = req.body;
  try {
    const upUser = await Neas.updateOne({ full_name: req.params.name }, payload);
    res.status(200).json(formatResponse(upUser));
  } catch (error) {
    next(createHttpError(500));
  }
}

async function addList(req, res, next) {
  const data = req.body;
  try {
    const result = await Neas.insertMany(data);
    res.status(201).json(formatResponse(200, result, 'Neas created'));
  } catch (error) {}
}




module.exports = { updateNeas, findAll, deleteNeas, createNeas, addList };

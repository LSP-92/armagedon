'use strict';

const mongoose = require('mongoose');

const neasSchema = mongoose.Schema(
  {
    name: { type: String, require: true, index: true },
    a: { type: Number, require: true },
    e: { type: Number, require: true },
    i: { type: Number, require: true },
    om: { type: Number, require: true },
    w: { type: Number, require: true },
    ma: { type: Number, require: true },
  },
  { timestamps: true }
);

const Neas = mongoose.model('Neas', neasSchema);

module.exports = Neas

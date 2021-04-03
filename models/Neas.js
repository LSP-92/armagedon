'use strict';

const mongoose = require('mongoose');

const neasSchema = mongoose.Schema(
  {
    full_name: { type: String, require: true, index: true },
    a: { type: Number, require: true },
    e: { type: Number, require: true },
    i: { type: Number, require: true },
    om: { type: Number, require: true },
    w: { type: Number, require: true },
    ma: { type: Number, require: true },
  },
  { timestamps: true }
);

neasSchema.statics.filters = function ({limit, skip}) {
  return Neas.find({}).limit(parseInt(limit)).skip(parseInt(skip)).exec();
};


const Neas = mongoose.model('Neas', neasSchema);

module.exports = Neas

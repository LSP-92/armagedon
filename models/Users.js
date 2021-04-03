'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const usersSchema = mongoose.Schema({
  email: { type: String, require: true, unique: true, index: true },
  passwd: { type: String, require: true },
});

usersSchema.methods.compareSync = async function (id, password) {
  try {
    const voUser = await User.find(id);
    if (!voUser) {
      return next();
    }
    return bcrypt.compareSync(password, voUser);
  } catch (error) {
    console.error(error.message);
    //TODO: create log file
  }
};

usersSchema.statics.encrypt = async function (user) {
  try {
    await User.save({
      ...user,
      password: bcrypt.hashSync(user.password, bcrypt.genSaltSync),
    });
  } catch (error) {
    console.error(error);
    //TODO: create log file
  }
};

const User = mongoose.model('User', usersSchema);

'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const usersSchema = mongoose.Schema(
  {
    email: { type: String, require: true, unique: true, index: true },
    password: { type: String, require: true },
  },
  { timestamps: true }
);

usersSchema.methods.checkPasswd = function (password) {
  return bcrypt.compare(password, this.password);
};

usersSchema.statics.encrypt = async function (user) {
  try {
    const salt = bcrypt.genSaltSync();
    if (await User.exists({ email: user.email })) {
      return 1;
    }
    const userDb = new User({
      ...user,
      password: bcrypt.hashSync(user.password, salt),
    });
    userDb.save();
    return user;
  } catch (error) {
    console.error(error);
  }
};

usersSchema.statics.updateUser = async function (data, user) {
  try {
    const salt = bcrypt.genSaltSync();
    const result = await User.updateOne(data,{
      ...user,
      password: bcrypt.hashSync(user.password, salt),
    });
    return result;
  } catch (error) {
    console.error(error);
  }
};

usersSchema.statics.filters = function ({limit, skip}) {
  return User.find({}).limit(parseInt(limit)).skip(parseInt(skip)).exec();
};

const User = mongoose.model('User', usersSchema);

module.exports = User;

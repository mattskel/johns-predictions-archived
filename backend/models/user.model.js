// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const validator = require('validator');
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import validator from 'validator';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  username: {
    type: String,
    // required: true
  },
  isAdmin: {
    type: Boolean
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {timestamps: true});

// static signup method
userSchema.statics.signup = async function(email, password) {
  // validation
  if (!email || !password) {
    throw Error('All fields are required');
  }
  if (!validator.isEmail(email)) {
    throw Error('Email is not valid')
  }
  // if (!validator.isStrongPassword) {
  //   throw Error('Password is not string enough')
  // }

  const exists = await this.findOne({email});
  if (exists) {
    throw Error('Email already exists');
  }

  const salt = await bcrypt.genSalt(10);
  const hash =  await bcrypt.hash(password, salt);

  const user = await this.create({email, password: hash});
  return user;
}

// static login method
userSchema.statics.login = async function(email, password) {
  // validation
  if (!email || !password) {
    throw Error('All fields are required');
  }

  const user = await this.findOne({email});
  if (!user) {
    throw Error('Incorrect email');
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error('Incorrect password');
  }

  return user;
}

userSchema.methods = {
  authenticate: function(plainText) {
    return bcrypt.compare(plainText, this.password);
  }
}

const User = mongoose.model('User', userSchema);
// module.exports = User;
export default User;
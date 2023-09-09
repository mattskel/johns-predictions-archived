/**
 * 
const User = require('../models/user.model');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
*/
import User from '../models/user.model';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

// get a single user
export const getUser = async (req, res) => {
  const {id} = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Id is not valid'});
  }

  const user = await User.findById(id);
  if (!user) {
    return res.status(404).json({error: 'User not found'});
  }

  res.status(200).json(user);
}

// create a new user
export const createUser = async (req, res) => {
  const {username, password, email} = req.body;

  const emptyFields = [];

  if (!username) {
    emptyFields.push('username');
  }
  if (!password) {
    emptyFields.push('password');
  }
  if (!email) {
    emptyFields.push('email');
  }

  
  if (emptyFields.length > 0) {
    console.log('emptyFields', emptyFields)
    return res.status(400).json({error: 'Please fill in all the fields', emptyFields});
  }

  // add doc to db
  try {
    const user = await User.create({username, password, email});
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// delete a user
export const deleteUser = async (req, res) => {
  const {id} = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Id is not valid'});
  }

  const user = await User.findOneAndDelete({_id: id});
  if (!user) {
    return res.status(400).json({error: 'User not found'});
  }

  res.status(200).json(user);
}

// update a user
export const updateUser = async(req, res) => {
  const {id} = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Id is not valid'});
  }

  const user = await User.findOneAndUpdate({_id: id}, {
    ...req.body
  });
  if (!user) {
    return res.status(400).json({error: 'User not found'});
  }

  res.status(200).json(user);
}

// get all the users
export const getUsers = async (req, res) => {
  const users = await User.find({}).sort({createdAt: -1});

  res.status(200).json(users);
}

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'});
}

// login user
export const loginUser = async (req, res) => {
  const {email, password} = req.body;
  try {
    const user = await User.login(email, password);
    const {isAdmin} = user

    // create a token
    const token = createToken(user._id);
    res.status(200).json({email, token, isAdmin});
  } catch(error) {
    res.status(400).json({error: error.message})
  }
}

// signup user
export const signupUser = async (req, res) => {
  const {email, password} = req.body;
  try {
    const user = await User.signup(email, password);

    // create a token
    const token = createToken(user._id);
    res.status(200).json({email, token});
  } catch(error) {
    res.status(400).json({error: error.message})
  }
}

// module.exports = {
//   getUser,
//   createUser,
//   deleteUser,
//   updateUser,
//   getUsers,
//   loginUser,
//   signupUser
// }

// export default {
//   getUser,
//   createUser,
//   deleteUser,
//   updateUser,
//   getUsers,
//   loginUser,
//   signupUser
// }
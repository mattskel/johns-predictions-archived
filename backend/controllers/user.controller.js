import User from '../models/user.model';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

// get a single user
const getUser = async (req, res, next, id) => {
  try {
    let user = await User.findById(id)
    if (!user)
      return res.status('400').json({
        error: "User not found"
      })
    req.profile = user
    next()
  } catch (err) {
    return res.status('400').json({
      error: "Could not retrieve user"
    })
  }
}

const read = (req, res) => {
  // req.profile.hashed_password = undefined
  // req.profile.salt = undefined
  return res.json(req.profile)
}

// create a new user
const createUser = async (req, res) => {
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
const deleteUser = async (req, res) => {
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
const updateUser = async(req, res) => {
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
const getUsers = async (req, res) => {
  const users = await User.find({}).sort({createdAt: -1});

  res.status(200).json(users);
}

export default {
  getUser,
  createUser,
  deleteUser,
  updateUser,
  getUsers,
  read
}
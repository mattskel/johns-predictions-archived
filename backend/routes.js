const express = require('express');
// const User = require('./models')
const {
  createUser,
  getUser,
  deleteUser,
  updateUser,
  getUsers
} = require('./controllers');

const router = express.Router();

// POST a new user
router.post('/', createUser);

// GET an existing user
router.get('/:id', getUser)

// GET all users
router.get('/', getUsers);

// DELETE a user
router.delete('/:id', deleteUser);

// PATCH a user
router.patch('/:id', updateUser)

module.exports = router
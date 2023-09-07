/**
 * 
const express = require('express');
const {
  createUser,
  getUser,
  deleteUser,
  updateUser,
  getUsers,
  loginUser,
  signupUser
} = require('../controllers/user.controller');
const requireAuth = require('../middleware/requireAuth');
*/
import express from 'express';
import {createUser, getUser, deleteUser, updateUser, getUsers, loginUser, signupUser} from '../controllers/user.controller';
import requireAuth from '../middleware/requireAuth';


const router = express.Router();

// login route
router.post('/login', loginUser);

// signup router
router.post('/signup', signupUser);

/**
 * Don't need auth for login and signup
 * Normally login and signup would be in a different route file
 * Because they are in the same file need to put them before the auth
 */

// require auth for all routes
router.use(requireAuth);

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

// module.exports = router
export default router;
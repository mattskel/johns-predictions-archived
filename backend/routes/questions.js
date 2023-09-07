/**
 *
const express = require('express');

const {
  createQuestion,
  getQuestions,
  deleteQuestion,
  updateQuestion
} = require('../controllers/questionController');
const requireAuth = require('../middleware/requireAuth');
 */
import express from 'express';
import {createQuestion, getQuestions, deleteQuestion, updateQuestion} from '../controllers/questionController';
import requireAuth from '../middleware/requireAuth';

const router = express.Router();

// We want to protect all these routes
// A user must be authenticated to request these routes
router.use(requireAuth);

router.post('/', createQuestion);

router.get('/', getQuestions);

router.delete('/:id', deleteQuestion);

router.patch('/:id', updateQuestion)

// module.exports = router
export default router;
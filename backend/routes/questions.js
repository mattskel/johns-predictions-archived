const express = require('express');

const {
  createQuestion,
  getQuestions,
  deleteQuestion
} = require('../controllers/questionController');

const router = express.Router();

router.post('/', createQuestion);

router.get('/', getQuestions);

router.delete('/:id', deleteQuestion);

module.exports = router
const express = require('express');

const {
  createQuestion,
  getQuestions,
  deleteQuestion,
  updateQuestion
} = require('../controllers/questionController');

const router = express.Router();

router.post('/', createQuestion);

router.get('/', getQuestions);

router.delete('/:id', deleteQuestion);

router.patch('/:id', updateQuestion)

module.exports = router
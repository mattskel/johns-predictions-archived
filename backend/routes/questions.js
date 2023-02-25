const express = require('express');

const {
  createQuestion,
  getQuestions,
  deleteQuestion,
  updateQuestion
} = require('../controllers/questionController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

// We want to protect all these routes
// A user must be authenticated to request these routes
router.use(requireAuth);

router.post('/', createQuestion);

router.get('/:prospectiveId', getQuestions);

router.delete('/:id', deleteQuestion);

router.patch('/:id', updateQuestion)

module.exports = router
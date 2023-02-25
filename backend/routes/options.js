const express = require('express');

const {
  createOption,
  getOptions,
  deleteOption,
  updateOption
} = require('../controllers/optionController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

// We want to protect all these routes
// A user must be authenticated to request these routes
router.use(requireAuth);

router.post('/', createOption);

router.get('/:questionId', getOptions);

router.delete('/:id', deleteOption);

router.patch('/:id', updateOption)

module.exports = router
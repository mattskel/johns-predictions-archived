const express = require('express');
const {
  createProspective,
  getPropsectives,
  submitProspective
} = require('../controllers/prospectiveController')
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

router.use(requireAuth);

router.post('/', createProspective);
router.get('/', getPropsectives);

router.post('/:id/submit', submitProspective)

module.exports = router;
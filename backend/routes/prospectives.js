const express = require('express');
const {
  createProspective,
  getPropsectives,
  submitProspective,
  getPropsective,
  deleteProspective
} = require('../controllers/prospectiveController')
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

router.use(requireAuth);

router.post('/', createProspective);
router.get('/', getPropsectives);
router.get('/:id', getPropsective);
router.delete('/:id', deleteProspective);
router.post('/:id/submit', submitProspective);

module.exports = router;
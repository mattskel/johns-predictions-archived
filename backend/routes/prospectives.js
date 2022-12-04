const express = require('express');
const {
  createProspective,
  getPropsectives
} = require('../controllers/prospectiveController')

const router = express.Router();

router.post('/', createProspective);
router.get('/', getPropsectives);

module.exports = router;
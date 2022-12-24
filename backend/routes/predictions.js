const express = require('express');
const {
  getPredictions
} = require('../controllers/predictionController');
const requireAuth = require('../middleware/requireAuth');
const router = express.Router();

router.use(requireAuth);

router.get('/', getPredictions);

module.exports = router
/**
 * 
const express = require('express');
const {
  getPredictions
} = require('../controllers/predictionController');
const requireAuth = require('../middleware/requireAuth');
 */
import express from 'express';
import { getPredictions } from '../controllers/predictionController.js';
import requireAuth from '../middleware/requireAuth';

const router = express.Router();

router.use(requireAuth);

router.get('/', getPredictions);

// module.exports = router
export default router;
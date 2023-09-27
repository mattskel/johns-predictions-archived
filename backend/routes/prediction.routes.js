/**
 * 
const express = require('express');
const {
  getPredictions
} = require('../controllers/predictionController');
const requireAuth = require('../middleware/requireAuth');
 */
import express from 'express';
import predictionCtrl from '../controllers/prediction.controller.js';
import prospectiveCtrl from '../controllers/prospective.controller.js';
import userCtrl from '../controllers/user.controller.js';
import submissionCtrl from '../controllers/submission.controller.js';
import requireAuth from '../middleware/requireAuth.js';

const router = express.Router();

// router.use(requireAuth);

router.route('/for/:prospectiveId/by/:userId')
  .get(predictionCtrl.getPredictions)
  .post(submissionCtrl.create, predictionCtrl.createPredictions)
  .put(submissionCtrl.update, predictionCtrl.update);

router.route('/for/:prospectiveId')
  .get(prospectiveCtrl.isClosed, predictionCtrl.getPredictions);

router.param('prospectiveId', prospectiveCtrl.getPropsective)
router.param('userId', userCtrl.getUser)
export default router;
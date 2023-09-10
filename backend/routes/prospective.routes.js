/**
 * 
const express = require('express');
const {
  createProspective,
  getPropsectives,
  submitProspective,
  getPropsective,
  deleteProspective,
  getProspectiveQuestionsAndPredictions
} = require('../controllers/prospectiveController')
const requireAuth = require('../middleware/requireAuth');
*/
import express from 'express';
import prospectiveCtrl from '../controllers/prospective.controller';
import authCtrl from '../controllers/auth.controller';

const router = express.Router();

// router.use(requireAuth);
router.route('/api/prospectives')
  .get(prospectiveCtrl.getPropsectives)
  .post(prospectiveCtrl.createProspective);

router.route('/api/prospectives/:id')
  .get(prospectiveCtrl.getPropsective)
  .delete(prospectiveCtrl.deleteProspective);


// router.post('/api/prospectives/:id/submit', submitProspective);
// router.get('/api/prospectives/:id/questions-and-predictions', getProspectiveQuestionsAndPredictions);

// module.exports = router;
export default router;
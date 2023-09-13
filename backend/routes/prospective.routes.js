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
router.route('/')
  .get(prospectiveCtrl.getPropsectives)
  .post(prospectiveCtrl.createProspective);

router.route('/:prospectiveId')
  .get(prospectiveCtrl.read)
  .put(prospectiveCtrl.update)
  // .delete(prospectiveCtrl.deleteProspective);


// router.post('/api/prospectives/:id/submit', submitProspective);
// router.get('/api/prospectives/:id/questions-and-predictions', getProspectiveQuestionsAndPredictions);

// module.exports = router;
router.param('prospectiveId', prospectiveCtrl.getPropsective)
export default router;
/**
 *
const express = require('express');

const {
  createQuestion,
  getQuestions,
  deleteQuestion,
  updateQuestion
} = require('../controllers/questionController');
const requireAuth = require('../middleware/requireAuth');
 */
import express from 'express';
// import {createQuestion, getQuestions, deleteQuestion, updateQuestion} from '../controllers/questionController';
import questionCtrl from '../controllers/question.controller';
import prospectiveCtrl from '../controllers/prospective.controller';
import requireAuth from '../middleware/requireAuth';

const router = express.Router();

// We want to protect all these routes
// A user must be authenticated to request these routes
// router.use(requireAuth);

router.route('/')
  // .post(questionCtrl.createQuestion)
  .get(questionCtrl.getQuestions);

// router.delete('/:id', deleteQuestion);

// router.patch('/:id', updateQuestion)
router.route('/for/:prospectiveId')
  .get(questionCtrl.getQuestions)
  .post(questionCtrl.createQuestion);

router.route('/:id')  
  .get(questionCtrl.read)
  .put(questionCtrl.updateQuestion);

// module.exports = router
router.param('prospectiveId', prospectiveCtrl.getPropsective);
router.param('id', questionCtrl.getQuestionById)
export default router;
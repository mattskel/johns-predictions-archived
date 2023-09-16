import express from 'express';
import submissionCtrl from '../controllers/submission.controller.js';
import userCtrl from '../controllers/user.controller.js';

const router = express.Router();

router.route('/for/:userId/')
  .get(submissionCtrl.listForUser)

router.param('userId', userCtrl.getUser)
export default router;  
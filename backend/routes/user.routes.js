import express from 'express';
import userCtrl from '../controllers/user.controller';
import authCtrl from '../controllers/auth.controller';
import requireAuth from '../middleware/requireAuth';


const router = express.Router();

router.route('/')
  .get(userCtrl.getUsers)
  .post(userCtrl.createUser);


router.route('/:userId')
  .get(authCtrl.requireSignin, userCtrl.read)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.deleteUser)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.updateUser)

router.param('userId', userCtrl.getUser)

// module.exports = router
export default router;
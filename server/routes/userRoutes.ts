import express from 'express';
import {
  signup,
  login,
  protect,
  forgetPassword,
  resetPassword,
  updatePassword,
} from '../controllers/authController';

import {
  updateMe,
  deleteMe,
  getAllUsers,
  createUser,
} from '../controllers/userController';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/forgetPassword', protect, forgetPassword);
router.patch('/resetPassword/:token', protect, resetPassword);
router.patch('/updateMyPassword', protect, updatePassword);

router.get('/Me', protect);
router.patch('/updateMe', protect, updateMe);
router.delete('/deleteMe', protect, deleteMe);

router.route('/').get(protect, getAllUsers).post(createUser);

export default router;

const express = require('express');
const {
  registerUser,
  loginUser,
  logoutUser,
  getMe,
} = require('../controllers/authController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

/**
 * @route   POST /api/auth/register
 * @desc    Register a new user
 * @access  Public
 */
router.post('/register', registerUser);

/**
 * @route   POST /api/auth/login
 * @desc    Login user and get token
 * @access  Public
 */
router.post('/login', loginUser);

/**
 * @route   POST /api/auth/logout
 * @desc    Logout the user
 * @access  Private
 */
router.post('/logout', protect, logoutUser);

/**
 * @route   GET /api/auth/me
 * @desc    Get current user's profile
 * @access  Private
 */
router.get('/me', protect, getMe);

module.exports = router;

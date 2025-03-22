const express = require('express');
const {
  getUserProfile,
  updateUserProfile,
  getAllUsers,
  deleteUser,
} = require('../controllers/userController');
const { protect, checkRole } = require('../middlewares/authMiddleware');

const router = express.Router();

/**
 * @route   GET /api/users/me
 * @desc    Get current user profile
 * @access  Private
 */
router.get('/me', protect, getUserProfile);

/**
 * @route   PUT /api/users/me
 * @desc    Update user profile
 * @access  Private
 */
router.put('/me', protect, updateUserProfile);

/**
 * @route   GET /api/users
 * @desc    Get all users (Admin only)
 * @access  Private/Admin
 */
router.get('/', protect, checkRole(['admin']), getAllUsers);

/**
 * @route   DELETE /api/users/:id
 * @desc    Delete user by ID (Admin only)
 * @access  Private/Admin
 */
router.delete('/:id', protect, checkRole(['admin']), deleteUser);

module.exports = router;

const express = require('express');
const {
  createBooking,
  getMyBookings,
  updateBooking,
  cancelBooking,
} = require('../controllers/bookingController');
const { protect, checkRole } = require('../middlewares/authMiddleware');

const router = express.Router();

/**
 * @route   POST /api/bookings
 * @desc    Create a booking
 * @access  Private/Student
 */
router.post('/', protect, checkRole(['student']), createBooking);

/**
 * @route   GET /api/bookings/me
 * @desc    Get user's bookings
 * @access  Private
 */
router.get('/me', protect, getMyBookings);

/**
 * @route   PUT /api/bookings/:id
 * @desc    Update booking status (Instructor/Admin only)
 * @access  Private
 */
router.put('/:id', protect, checkRole(['instructor', 'admin']), updateBooking);

/**
 * @route   DELETE /api/bookings/:id
 * @desc    Cancel a booking (Admin only)
 * @access  Private/Admin
 */
router.delete('/:id', protect, checkRole(['admin']), cancelBooking);

module.exports = router;

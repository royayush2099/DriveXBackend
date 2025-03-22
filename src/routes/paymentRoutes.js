const express = require('express');
const {
  createPayment,
  getMyPayments,
} = require('../controllers/paymentController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

/**
 * @route   POST /api/payments
 * @desc    Create a payment for booking
 * @access  Private
 */
router.post('/', protect, createPayment);

/**
 * @route   GET /api/payments/me
 * @desc    Get user’s payment history
 * @access  Private
 */
router.get('/me', protect, getMyPayments);

module.exports = router;

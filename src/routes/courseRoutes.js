const express = require('express');
const {
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
} = require('../controllers/courseController');
const { protect, checkRole } = require('../middlewares/authMiddleware');

const router = express.Router();

/**
 * @route   GET /api/courses
 * @desc    Get all courses
 * @access  Public
 */
router.get('/', getCourses);

/**
 * @route   GET /api/courses/:id
 * @desc    Get course details by ID
 * @access  Public
 */
router.get('/:id', getCourseById);

/**
 * @route   POST /api/courses
 * @desc    Create a new course (Instructor/School only)
 * @access  Private
 */
router.post('/', protect, checkRole(['instructor', 'school']), createCourse);

/**
 * @route   PUT /api/courses/:id
 * @desc    Update course details
 * @access  Private
 */
router.put('/:id', protect, checkRole(['instructor', 'school']), updateCourse);

/**
 * @route   DELETE /api/courses/:id
 * @desc    Delete a course (Admin only)
 * @access  Private/Admin
 */
router.delete('/:id', protect, checkRole(['admin']), deleteCourse);

module.exports = router;

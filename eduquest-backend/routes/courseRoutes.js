const express = require('express');
const Course = require('../models/Course');
const auth = require('../middleware/auth');
const router = express.Router();

// Get all courses
router.get('/', async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

// Add a course (Admin only)
router.post('/', auth, async (req, res) => {
  const { title, description, difficulty, lessons } = req.body;
  const course = new Course({ title, description, difficulty, lessons });

  try {
    await course.save();
    res.status(201).json({ message: 'Course created' });
  } catch (error) {
    res.status(400).json({ message: 'Error creating course' });
  }
});

module.exports = router;

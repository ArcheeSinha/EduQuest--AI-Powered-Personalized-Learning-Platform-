const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  difficulty: String,
  lessons: [{ title: String, content: String }]
});

module.exports = mongoose.model('Course', CourseSchema);

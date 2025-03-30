const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  level: { type: Number, default: 1 }
});

module.exports = mongoose.model('User', UserSchema);

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    googleId: String,
    name: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('users', userSchema);

module.exports = User;

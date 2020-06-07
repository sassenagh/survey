const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    googleId: String,
    name: String,
    credits: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('users', userSchema);

module.exports = User;

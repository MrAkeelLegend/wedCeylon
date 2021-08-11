const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const guestUserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  }
}, {timestamps: true});

const GuestUser = mongoose.model('GuestUser', guestUserSchema);

module.exports = GuestUser;
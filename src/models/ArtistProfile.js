const mongoose = require('mongoose');

const artistProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  socialLinks: {
    instagram: String,
    twitter: String,
    website: String
  },
  phoneNumber: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('ArtistProfile', artistProfileSchema);
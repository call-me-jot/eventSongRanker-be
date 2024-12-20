const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  // Common fields
  phoneNumber: {
    type: String,
    required: true
  },
  
  // Artist specific fields
  name: {
    type: String,
    required: function() { return this.userType === 'artist'; }
  },
  bio: {
    type: String,
    required: function() { return this.userType === 'artist'; }
  },
  genre: {
    type: String,
    required: function() { return this.userType === 'artist'; }
  },
  socialLinks: {
    instagram: String,
    twitter: String,
    website: String
  },
  
  // Attendee specific fields
  firstName: {
    type: String,
    required: function() { return this.userType === 'attendee'; }
  },
  lastName: {
    type: String,
    required: function() { return this.userType === 'attendee'; }
  },
  dateOfBirth: {
    type: Date,
    required: function() { return this.userType === 'attendee'; }
  },
  preferences: {
    favoriteGenres: [String],
    notificationPreferences: {
      email: { type: Boolean, default: true },
      sms: { type: Boolean, default: false }
    }
  },
  
  // Discriminator field
  userType: {
    type: String,
    enum: ['artist', 'attendee'],
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Profile', profileSchema);
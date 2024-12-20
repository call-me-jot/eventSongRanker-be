const { body } = require('express-validator');
const { PASSWORD_REGEX, PASSWORD_REQUIREMENTS, ROLES } = require('../../constants/validationRules');

const signupValidationRules = [
  // Email validation
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Must be a valid email address')
    .normalizeEmail(),

  // Password validation
  body('password')
    .notEmpty().withMessage('Password is required')
    .matches(PASSWORD_REGEX)
    .withMessage(`Password must contain: ${PASSWORD_REQUIREMENTS.requirements.join(', ')}`),

  // Role validation
  body('role')
    .notEmpty().withMessage('Role is required')
    .isIn(ROLES).withMessage('Invalid role. Must be either artist or attendee'),

  // Profile validation based on role
  body('profile').custom((profile, { req }) => {
    if (!profile) {
      throw new Error('Profile details are required');
    }

    // Common validation for both roles
    if (!profile.phoneNumber) {
      throw new Error('Phone number is required');
    }

    if (req.body.role === 'artist') {
      if (!profile.name) {
        throw new Error('Artist name is required');
      }
      if (!profile.bio) {
        throw new Error('Artist bio is required');
      }
      if (!profile.genre) {
        throw new Error('Genre is required');
      }
    } else {
      if (!profile.firstName) {
        throw new Error('First name is required');
      }
      if (!profile.lastName) {
        throw new Error('Last name is required');
      }
      if (!profile.dateOfBirth) {
        throw new Error('Date of birth is required');
      }
      // Validate date of birth format and age
      const dob = new Date(profile.dateOfBirth);
      if (isNaN(dob.getTime())) {
        throw new Error('Invalid date of birth format');
      }
      // Check if user is at least 13 years old
      const age = Math.floor((new Date() - dob) / (365.25 * 24 * 60 * 60 * 1000));
      if (age < 13) {
        throw new Error('User must be at least 13 years old');
      }
    }
    return true;
  })
];

const loginValidationRules = [
  // Email validation
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Must be a valid email address')
    .normalizeEmail(),

  // Password validation
  body('password')
    .notEmpty().withMessage('Password is required')
];

module.exports = {
  signupValidationRules,
  loginValidationRules
};
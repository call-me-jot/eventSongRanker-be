const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const PASSWORD_REQUIREMENTS = {
  minLength: 8,
  requirements: [
    'At least 8 characters',
    'One uppercase letter',
    'One lowercase letter',
    'One number',
    'One special character (@$!%*?&)'
  ]
};

const ROLES = ['artist', 'attendee'];

module.exports = {
  PASSWORD_REGEX,
  PASSWORD_REQUIREMENTS,
  ROLES
};
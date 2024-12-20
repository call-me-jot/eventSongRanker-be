const { validationResult } = require('express-validator');
const ErrorCodes = require('../constants/errorCodes');
const AppError = require('../utils/AppError');

const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(err => err.msg);
    throw new AppError(
      ErrorCodes.VALIDATION_ERROR,
      errorMessages.join('. '),
      400
    );
  }
  next();
};

module.exports = { validateRequest };
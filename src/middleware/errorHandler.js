const ErrorCodes = require('../constants/errorCodes');

const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  // Development error response
  if (process.env.NODE_ENV === 'development') {
    return res.status(err.statusCode).json({
      status: err.status,
      errorCode: err.errorCode,
      error: err.message,
      stack: err.stack
    });
  }

  // Production error response
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: err.status,
      errorCode: err.errorCode,
      error: err.message
    });
  }

  // Programming or unknown errors
  console.error('ERROR 💥', err);
  return res.status(500).json({
    status: 'error',
    errorCode: ErrorCodes.INTERNAL_SERVER_ERROR,
    error: 'Something went wrong!'
  });
};

module.exports = errorHandler;
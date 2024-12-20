class AppError extends Error {
    constructor(errorCode, message, statusCode = 500) {
      super(message);
      this.errorCode = errorCode;
      this.statusCode = statusCode;
      this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
      this.isOperational = true;
  
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  module.exports = AppError;
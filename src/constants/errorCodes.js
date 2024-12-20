const ErrorCodes = {
    // Authentication Errors (1xxx)
    USER_ALREADY_EXISTS: '1001',
    INVALID_CREDENTIALS: '1002',
    TOKEN_EXPIRED: '1003',
    INVALID_TOKEN: '1004',
    
    // Profile Errors (2xxx)
    PROFILE_NOT_FOUND: '2001',
    INVALID_PROFILE_DATA: '2002',
    
    // General Errors (5xxx)
    INTERNAL_SERVER_ERROR: '5001',
    VALIDATION_ERROR: '5002',
    DATABASE_ERROR: '5003'
  };
  
  module.exports = ErrorCodes;
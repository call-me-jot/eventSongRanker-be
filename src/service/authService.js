const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const AppError = require('../utils/AppError');
const ErrorCodes = require('../constants/errorCodes');

class AuthService {
  static async hashPassword(password) {
    return bcrypt.hash(password, 10);
  }

  static async verifyPassword(password, hashedPassword) {
    return bcrypt.compare(password, hashedPassword);
  }

  static generateToken(userId, role) {
    return jwt.sign(
      { userId, role },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
  }

  static async createUser(email, password, role) {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new AppError(
        ErrorCodes.USER_ALREADY_EXISTS,
        'User already exists',
        400
      );
    }

    const hashedPassword = await this.hashPassword(password);
    const user = new User({
      email,
      password: hashedPassword,
      role
    });

    await user.save();
    return user;
  }

  static async validateCredentials(email, password) {
    const user = await User.findOne({ email });
    if (!user) {
      throw new AppError(
        ErrorCodes.INVALID_CREDENTIALS,
        'Invalid credentials',
        401
      );
    }

    const validPassword = await this.verifyPassword(password, user.password);
    if (!validPassword) {
      throw new AppError(
        ErrorCodes.INVALID_CREDENTIALS,
        'Invalid credentials',
        401
      );
    }

    return user;
  }
}

module.exports = AuthService;
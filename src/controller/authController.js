const AuthService = require('../service/authService');
const ProfileService = require('../service/profileService');


const signup = async (req, res, next) => {
  try {
    const { email, password, role, profile } = req.body;

    const user = await AuthService.createUser(email, password, role);
    const userProfile = await ProfileService.createProfile(user._id, role, profile);
    const token = AuthService.generateToken(user._id, user.role);

    res.status(201).json({
      status: 'success',
      message: 'User created successfully',
      token,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
        profile: userProfile
      }
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await AuthService.validateCredentials(email, password);
    const profile = await ProfileService.getProfileByUserId(user._id);
    const token = AuthService.generateToken(user._id, user.role);

    res.json({
      status: 'success',
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
        profile
      }
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signup,
  login
};
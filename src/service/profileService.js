const Profile = require('../models/Profile');
const AppError = require('../utils/AppError');
const ErrorCodes = require('../constants/errorCodes');

class ProfileService {
  static async createProfile(userId, role, profileData) {
    try {
      const profile = new Profile({
        userId,
        userType: role,
        phoneNumber: profileData.phoneNumber,
        ...(role === 'artist' ? {
          name: profileData.name,
          bio: profileData.bio,
          genre: profileData.genre,
          socialLinks: profileData.socialLinks
        } : {
          firstName: profileData.firstName,
          lastName: profileData.lastName,
          dateOfBirth: new Date(profileData.dateOfBirth),
          preferences: profileData.preferences
        })
      });

      await profile.save();
      return profile;
    } catch (error) {
      throw new AppError(
        ErrorCodes.INVALID_PROFILE_DATA,
        'Invalid profile data',
        400
      );
    }
  }

  static async getProfileByUserId(userId) {
    const profile = await Profile.findOne({ userId });
    if (!profile) {
      throw new AppError(
        ErrorCodes.PROFILE_NOT_FOUND,
        'Profile not found',
        404
      );
    }
    return profile;
  }
}

module.exports = ProfileService;
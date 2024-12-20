require('dotenv').config();

const APIConfig = {
  LAST_FM_API_KEY: process.env.LAST_FM_API_KEY, // API key from the .env file
  LAST_FM_BASE_URL: 'http://ws.audioscrobbler.com/2.0/',
};

module.exports = APIConfig;

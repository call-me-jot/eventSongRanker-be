// // src/services/ApiService.js
// const axios = require('axios');
// const { LAST_FM_API_KEY } = process.env;

// class ApiService {
//   // Function to get the top tracks of an artist
//   async getTopTracks(artistName, limit = 100) {
//     const apiUrl = 'http://ws.audioscrobbler.com/2.0/';  // Last.fm API endpoint
//     const params = {
//       method: 'artist.toptracks',
//       artist: artistName,
//       limit: limit,
//       api_key: '8c87da043ccf2256dd8b671794bda5b6',  // Your API Key from Last.fm
//       format: 'json',
//     };
//     console.log("Params", params);
//     try {
//       const response = await axios.get(apiUrl, { params });
//       return response.data.toptracks.track;
//     } catch (error) {
//       console.error('Error in ApiService:', error);
//       throw new Error('Failed to fetch top tracks');
//     }
//   }
// }

// module.exports = ApiService;

// src/services/ApiService.js
const axios = require('axios');
const { LAST_FM_API_KEY } = process.env;  // Use environment variable for API key

class ApiService {
  // Function to get the top tracks of an artist
  async getTopTracks(artistName, limit = 100) {
    // Hardcoded URL for testing
    const apiUrl = `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artistName}&limit=${limit}&api_key=8c87da043ccf2256dd8b671794bda5b6&format=json`;

    try {
      console.log("Fetching top tracks for artist:", artistName);  // Basic logging for debugging
      const response = await axios.get(apiUrl);  // No params object since it's part of the URL
      return response.data.toptracks.track;  // Return the track data from the API response
    } catch (error) {
      console.error('Error in ApiService:', error);  // Log error for debugging
      throw new Error('Failed to fetch top tracks');
    }
  }
}

module.exports = ApiService;


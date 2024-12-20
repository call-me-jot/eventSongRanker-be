const ApiService = require('../services/ApiService');

class DataController {
  constructor() {
    this.apiService = new ApiService();
  }

  // Handler to fetch top tracks of an artist
  async getTopTracks(req, res) {
    const { artistName, limit } = req.query;

    // Validate that artistName is provided
    if (!artistName) {
      return res.status(400).json({ error: 'artistName is required.' });
    }

    // Ensure the limit is a number and set a default if not provided
    const trackLimit = limit ? parseInt(limit, 10) : 100;

    if (isNaN(trackLimit) || trackLimit <= 0) {
      return res.status(400).json({ error: 'Limit must be a positive number.' });
    }

    try {
      // Fetch the tracks from the ApiService
      const tracks = await this.apiService.getTopTracks(artistName, trackLimit);
      
      // If no tracks are found, send a 404 error
      if (!tracks || tracks.length === 0) {
        return res.status(404).json({ message: 'No tracks found for the artist.' });
      }

      // Send back the tracks data
      res.json({ tracks });
    } catch (error) {
      // Catch any errors and send back a 500 response
      console.error('Error fetching top tracks:', error);
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = DataController;

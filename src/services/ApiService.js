const axios = require("axios");
const { externalApiBaseUrl } = require("../config/apiConfig");

class ApiService {
  async fetchDataById(id) {
    try {
      const response = await axios.get(`${externalApiBaseUrl}/${id}`);
      return response.data; 
    } catch (error) {
      throw new Error(error.response?.data?.message || "Failed to fetch data");
    }
  }
}

module.exports = new ApiService();

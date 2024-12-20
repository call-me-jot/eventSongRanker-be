const ApiService = require("../services/ApiService");

class DataController {
  async getDataById(req, res) {
    const { id } = req.params;

    try {
      const data = await ApiService.fetchDataById(id);
      res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
}

module.exports = new DataController();

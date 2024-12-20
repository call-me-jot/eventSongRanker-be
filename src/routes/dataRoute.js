const express = require("express");
const router = express.Router();
const DataController = require("../controllers/DataController");

// Define route
router.get("/data/:id", (req, res) => DataController.getDataById(req, res));

module.exports = router;

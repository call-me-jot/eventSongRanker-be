// src/routes/dataRoute.js
const express = require('express');
const DataController = require('../controllers/DataController');

const router = express.Router();

// Route to fetch the top tracks
router.get('/top-tracks', (req, res) => {
  const dataController = new DataController();
  dataController.getTopTracks(req, res);
});

module.exports = router;

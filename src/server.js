// src/server.js
const express = require('express');
const dotenv = require('dotenv');
const dataRoute = require('./routes/dataRoute');

dotenv.config();  // Load environment variables

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Register routes
app.use('/api/data', dataRoute);

// Export the app instance for use in app.js
module.exports = app;

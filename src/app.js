const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
const dataRoute = require("./routes/dataRoute");
app.use("/api", dataRoute);

module.exports = app;

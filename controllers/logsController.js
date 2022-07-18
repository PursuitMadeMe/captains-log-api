const express = require("express");
const logs = express.Router();
const logData = require("../models/log");

logs.get("/", (req, res) => {
  res.send(logData);
});

module.exports = logs;
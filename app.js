const express = require("express");
const app = express();
app.use(express.json());

// const logController = require("./controllers/log.controller");

app.get("/", (request, response) => {
    response.send("Welcome to Captain's Log");
  });

//   app.use("/log", logController);

  app.use("*", (req, res) => {
    res.status(404).send("Sorry, but your URL log not.");
  });




module.exports = app;
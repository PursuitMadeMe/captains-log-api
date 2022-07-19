// express dependancies
const express = require("express");
const app = express();

// // create a variable to access bookmark data from models in bookmarksConstroller
const logsController = require("./controllers/logsController.js");

//middleware code 
app.use(express.json());
app.use("/logs", logsController);


// GET - Read - Welcome Page
// http://localhost:3333
app.get("/", (request, response) => {
    response.send("welcome to captain's log")
})

// ERROR MESSAGE 
// if path not found return response status 404 with the string "Page Not Found"
app.get("*", (request, response)=> {
    response.status(404).json({error: "Page Not Found"})
})

module.exports = app; 
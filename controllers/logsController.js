const express = require("express");
const logsRoutes = express.Router();
const logs = require("../models/log");
const {validateURL} = require('../models/vallidations.js')

//GET - Index(list of resource)
// http://localhost:8888/logs
logsRoutes.get("/", (req, res) => {
  // return  list of logs to the user
  res.json(logs);
});

//GET - Show individual log 
// http://localhost:8888/logs/1
logsRoutes.get("/:id", (request, response) => {

  // // Getting a specific log with params id 
    const {id} = request.params;

    // if specific log id (wild card entered by the user)
    if(logs[id]){
      // return that specific log id to the user
        response.json(logs[id]);
    }else{
      // else redirect to star path
        response.redirect("*")
    }
})

//POST - Create - add a new index(data) to the end of the log's array
// http:localhost:8888/logs
logsRoutes.post("/", validateURL, (request, response) => {

  // add(push) new data (logs) to the body of the page
    logs.push(request.body);

    // return the data to the end of the logs array to the user
    response.json(logs[logs.length-1]);
})

//DELETE 
// http:localhost:8888/logs/0 - id is 0 
logsRoutes.delete("/:id", (request, response) => {

  // whatever the user puts in - wild card
    const {id} = request.params;

    // create a variable to remove the parameter(id) from the logs data 
    const deletedLogs = logs.splice(id, 1)

    // send user ok status parameter was deleted from logs data 
    response.status(200).json(deletedLogs)
})


module.exports = logsRoutes; 
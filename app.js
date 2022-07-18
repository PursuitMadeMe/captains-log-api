// Dependencies
const express = require("express");

// Configuration
const app = express();

//Middleware that turns JSON into usable Javascript 
app.use(express.json());

const logController = require("./controllers/logsController");


app.get("/", (req, res)=>{
    res.send("Welcome to the Captain's Log")
});

app.use("/log", logController);

app.get("*", (req, res) => {
    res.status(404).json({error: "page not found"})
})
module.exports = app
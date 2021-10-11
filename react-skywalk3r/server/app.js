const express = require("express");
const path = require("path");
let app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/", (req, res) => {
  res.status(200).send("Successful GET");
});

module.exports = app;

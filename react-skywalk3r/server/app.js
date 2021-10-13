const express = require("express");
const path = require("path");
const apiDataRequest = require("./helper.js").apiDataRequest;

let app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/horizons/:planetId", (req, res) => {
  let planetId = req.params.planetId;
  apiDataRequest(planetId, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  });
});

module.exports = app;

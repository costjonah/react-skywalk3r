const express = require("express");
const expressStaticGzip = require("express-static-gzip");
const path = require("path");
const apiDataRequest = require("./helper.js").apiDataRequest;

let app = express();

app.use(express.json());
app.use(expressStaticGzip(path.join(__dirname, "../client/dist")));
app.use(express.static(path.join(__dirname, "../client/dist")));
app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

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

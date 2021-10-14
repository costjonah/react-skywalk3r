const axios = require("axios");

let apiDataRequest = (planetId, callback) => {
  let options = {
    url: `https://api.le-systeme-solaire.net/rest/bodies/${planetId}`,
    headers: {
      "User-Agent": "request",
      "Accept-Encoding": "gzip, compress, br",
    },
  };

  axios
    .request(options, callback)
    .then((res) => {
      callback(null, res.data);
    })
    .catch((err) => {
      callback(err);
    });
};

module.exports.apiDataRequest = apiDataRequest;

const app = require("./app.js");

let port = 8080 || process.env.PORT;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

var PORT;

if (process.env.ENVIRONMENT != "lambda") {
  PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

module.exports = app;

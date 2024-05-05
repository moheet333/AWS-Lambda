require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json({ limit: "9mb" }));
app.use(express.json({ limit: "9mb" }));
app.use(cors()); // Allow CORS globally

// Define routes
const convertRouter = require("./routes/convert.js");
app.use("/api/v1", convertRouter);

// Serve static files (e.g., index.html)
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

// Only start the server if not running in Lambda environment
if (process.env.ENVIRONMENT !== "lambda") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;

const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

// static middleware
app.use("/dist", express.static(path.join(__dirname, "../dist")));

app.use("/api", require("./api"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;

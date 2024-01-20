const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});

app.get("/tasks", async (req, res) => {
  let data = [
    { title: "got gym ", text: "No pain no gain" },
    { title: "got gym ", text: "No pain no gain" },
    { title: "got gym ", text: "No pain no gain" },
    { title: "got gym ", text: "No pain no gain !" },
  ];

  try {
    res.status(200).json({ message: "Tasks loaded.", tasks: data });
  } catch (err) {
    console.log(err);
    return res
      .status(401)
      .json({ message: err.message || "Failed to load tasks." });
  }
});

app.listen(8000);

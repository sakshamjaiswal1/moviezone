const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "fnvdnfvenfveoirejrneurncubgbebeyrnoenedbbecyebceobcoecybb";

mongoose
  .connect("mongodb://localhost:27017/login-app-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database is Connected"))
  .catch((err) => console.log(err));

const port = process.env.port || 5001;
const app = express();
// app.use('/',express.static(path.join(__dirname,'static')))
app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.json({ status: "Server is running" });
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

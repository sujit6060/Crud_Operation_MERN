const express = require("express");
const app = express();
const cors = require("cors");
const userRoute = require("./routes/userRoute");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", userRoute);

module.exports = app;

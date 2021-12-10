const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected To Db");

    app.listen(process.env.PORT, () => {
      console.log("Server Running");
    });
  })
  .catch((err) => {
    console.log(err);
  });

const mongoose = require("mongoose");

const URI = "mongodb://0.0.0.0:27017/DEVS";

mongoose.connect(URI);
mongoose.connection
  .on("open", () => {
    console.log("Database Connected");
  })
  .once("error", (error) => {
    console.log("failed to connect", error);
  });

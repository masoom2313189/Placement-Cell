const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/placement_cell");
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error in connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to Database :: Mongodb");
});

module.exports = mongoose;

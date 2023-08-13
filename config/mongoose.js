const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://masoom2313189:WOyyNqFC2LrVEHMb@cluster0.tjrblio.mongodb.net/"
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "db connection error"));

db.once("open", () => {
  console.log("Successfully connected to the db");
});

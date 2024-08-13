const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL);

const connection = mongoose.connection;

connection.on("error", (err) => {
  console.error("Error Connecting to DB:", err);
});

connection.once("open", () => {
  console.log("Connected to DB");
});

module.exports = mongoose;

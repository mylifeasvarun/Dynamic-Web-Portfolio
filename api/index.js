const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

// Enable CORS
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB");
});

// Import routes
const portfolioRoutes = require("../server/routes/portfolioRoutes");

// Use routes
app.use("/api/portfolio", portfolioRoutes);

// Export the Express API
module.exports = app;

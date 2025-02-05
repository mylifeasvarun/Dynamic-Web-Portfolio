require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

const dbconfig = require("./config/dbConfig");
const portfolioRoute = require("./routes/portfolioRoutes");

app.use(cors());
app.use(express.json());

app.use("/api/portfolio", portfolioRoute);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

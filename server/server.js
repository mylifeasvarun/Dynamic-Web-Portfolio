require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

const dbconfig = require("./config/dbConfig");
const portfolioRoute = require("./routes/portfolioRoutes");

// CORS configuration
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? ["https://dynamic-web-portfolio-itcw.vercel.app"]
        : ["http://localhost:3000"],
    credentials: true,
  })
);

app.use(express.json());

// API routes
app.use("/api/portfolio", portfolioRoute);

// Serve static files in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

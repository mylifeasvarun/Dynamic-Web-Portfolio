require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const rateLimit = require("express-rate-limit");

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

// Trust proxy when behind a load balancer / CDN
app.set("trust proxy", 1);

// Global rate limiting (applies to all routes)
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(globalLimiter);

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

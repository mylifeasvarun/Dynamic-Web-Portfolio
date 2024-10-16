require("dotenv").config();
const express = require("express");
const app = express();

const dbconfig = require("./config/dbConfig");
console.log("MONGO_URL:", process.env.MONGO_URL);
const portfolioRoute = require("./routes/portfolioRoutes");

app.use(express.json());

app.use("/api/portfolio", portfolioRoute);

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

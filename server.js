const express = require("express");
const app = express();
require("dotenv").config();
const dbconfig = require("./config/dbconfig");

const portfolioRoute = require("./routes/portfolioRoutes");

app.use(express.json());

app.use("/api/portfolio", portfolioRoute);

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

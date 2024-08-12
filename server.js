const express = require("express");

const app = express();
const dbconfig = require("./config/dbconfig");

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

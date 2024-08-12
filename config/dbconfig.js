const mangoose = require("mangoose");

mangoose.connect(process.env.mango_url);

const connection = mangoose.connection;

connection.on("error", () => {
  console.log("Error Connecting to DB");
});

console.log("connected", () => {
  console.log("Connected to DB");
});

modeule.exports= mongoose;
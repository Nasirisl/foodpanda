// start server 
require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/db/db");
// connect to db
connectDB();


app.listen(3000, () => {
  console.log("server started on port 3000");
});
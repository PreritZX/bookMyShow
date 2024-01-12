const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();
app.use(cors());
const dbconfig = require("./config/dbConfig");

const userRoute = require("./routes/userRoute");

app.use(express.json());
app.use("/api/users", userRoute);

const movieRoute = require("./routes/movieRoute");
app.use("/api/users", movieRoute);

app.listen(8082, () => {
  console.log("server is running");
});

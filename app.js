const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found");

connectDB();

// middleware

app.use(express.static("./public"));
app.use(express.json());

// routes

app.use("/api/v1/tasks", tasks);

app.use(notFound);
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is runing ${port}`);
});

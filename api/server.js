require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const visitorsRoutes = require("./routes/visitors");
const exhibitorsRoutes = require("./routes/exhibitors");

// express app
const app = express();

// middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ header: "http", body: "body" });
});

// routes
app.use("/api/visitors", visitorsRoutes);
app.use("/api/exhibitors", exhibitorsRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT);
    console.log("Connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

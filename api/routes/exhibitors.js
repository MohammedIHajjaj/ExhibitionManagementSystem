const express = require("express");
const router = express.Router();

// Get all exhibitors
router.get("/", (req, res) => {
  res.send("Get all exhibitors");
});

// Post a new exhibitor
router.post("/", (req, res) => {
  res.send("post a new exhibitor");
});

module.exports = router;

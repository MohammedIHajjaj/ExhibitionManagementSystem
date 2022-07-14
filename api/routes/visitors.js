const express = require("express");
const router = express.Router();
const visitorFunctions = require("../controllers/visitorController");

// Get all visitors
router.get("/", visitorFunctions.getVisitors);

// Post a new visitor
router.post("/", visitorFunctions.createVisitor);

module.exports = router;

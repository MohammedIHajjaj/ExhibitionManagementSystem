const mongoose = require("mongoose");
const Visitor = require("../models/visitorModel");

// get all visitors
const getVisitors = async (req, res) => {
  const visitors = await Visitor.find();
  res.status(200).json(visitors);
};

// create new visitor
const createVisitor = async (req, res) => {
  const { name, tel, email } = req.body;

  try {
    const visitor = await Visitor.create({ name, tel, email });
    return res.status(200).json(visitor);
    console.log(visitor);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getVisitors,
  createVisitor,
};

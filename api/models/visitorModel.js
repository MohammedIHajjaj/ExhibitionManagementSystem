const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const visitorSchema = new Schema(
  {
    name: { type: String, required: true },
    tel: { type: Number, required: true },
    email: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("visitor", visitorSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exhibitorSchema = new Schema(
  {
    eName: { type: String, required: true },
    ePhone: { type: Number, required: true },
    eEmail: { type: String, required: true },
    eCompany: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("exhibitor", exhibitorSchema);

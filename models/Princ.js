const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PrincSchema = new Schema({
  msg: { type: String, required: true },
  cor: { type: String, required: true, lowercase: true },
  src: { type: String, required: true },
  msc: { type: String },
  seq: { type: Number, required: true, unique: true },
});

module.exports = mongoose.model("Princ", PrincSchema);

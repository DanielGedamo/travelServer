const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Countries = new Schema({
  idcontries: Number,
  nameConutries: String,
  cites: Array,
  obj: Object,
});
module.exports = mongoose.model("contries", Countries);

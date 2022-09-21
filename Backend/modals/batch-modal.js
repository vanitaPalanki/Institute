const mongoose = require("mongoose");
//const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;
const BatchSchema = new Schema({
  name: { type: String, require: true },
  duration: { type: String },
  student: [{ type: mongoose.Types.ObjectId, ref: "Student" }],
  instituteId: { type: mongoose.Types.ObjectId, ref: "teacher" },
});

module.exports = mongoose.model("Batch", BatchSchema);

const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;
const InstituteSchema = new Schema({
  UserName: { type: String, require: true },
  student: [{ type: mongoose.Types.ObjectId, ref: "Student" }],
  //teachers: [{ type: mongoose.Types.ObjectId, ref: "teacher" }],
  batch: [{ type: mongoose.Types.ObjectId, ref: "Batch" }],
  Doe: { type: Date },
  InstituteName: { type: String },
  Email: { type: String, required: true, unique: true },
  Password: { type: String, required: true, minlength: 6 },
  UserDesigination: { type: String },
  Address: { type: String },
  Contact: { type: Number },
});

InstituteSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Institute", InstituteSchema);

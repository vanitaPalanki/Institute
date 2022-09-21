const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;
const TeacherSchema = new Schema({
  name: { type: String, require: true },
  email: { type: String },
  contact: { type: Number },
  password: { type: String, required: true, minlength: 6 },
});

TeacherSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Teacher", TeacherSchema);

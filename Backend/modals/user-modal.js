const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;
const StudentSchema = new Schema({
  name: { type: String, require: true },
  instituteId: {
    type: mongoose.Types.ObjectId,

    ref: "Insititute",
  },
  //batchId: { type: mongoose.Types.ObjectId, ref: "Batch" },
  dob: { type: Date },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  address: { type: String },
  contact: { type: Number },
  regristrationStatus: {
    type: String,
    enum: ["select", "accepted", "declined"],
    default: "select",
  },
  batchName: { type: String },
  instituteName: { type: String },
});

StudentSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Student", StudentSchema);

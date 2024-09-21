const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const Validationdata = new Schema(
  {
    username: { type: String },
    phone: { type: String },
    enrollmentno: { type: Number },
    department: { type: String },
    facultyname: { type: String },
    projectUrl: { type: String },
    researchtitle: { type: String },
    verified: false,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Validationinfo", Validationdata);

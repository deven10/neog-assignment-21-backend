const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    medicalHistory: {
      type: String,
      required: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    assignedWard: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Patient = mongoose.model("Patient", PatientSchema);
module.exports = Patient;

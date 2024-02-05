const mongoose = require("mongoose");

const WardSchema = new mongoose.Schema(
  {
    wardNumber: {
      type: String,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    patientsRecovered: {
      type: Number,
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Ward = mongoose.model("Ward", WardSchema);
module.exports = Ward;

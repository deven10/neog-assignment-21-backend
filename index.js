require("./db");

const {
  addPatient,
  findAllPatients,
  updatePatient,
  deletePatient,
} = require("./src/Controllers/patient.controller");

const {
  addWard,
  findAllWards,
  updateWard,
  deleteWard,
} = require("./src/Controllers/ward.controller");

const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1> neoG Assignment 21 </h1>");
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({ error: "Something went wrong" });
});

app.use((req, res) => {
  res.status(404).json({ error: "No route found!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// -------------Testing Patients Routes-----------------
// addPatient({
//   name: "Kishor Umrania",
//   age: 62,
//   gender: "Male",
//   medicalHistory: "Low Blood Pressure",
//   contact: 7894561230,
//   assignedWard: "General",
// });

// findAllPatients();

// deletePatient("65bf4edaa76b8a740a613123");

// updatePatient("65bf4e828303177022e23b66", {
//   name: "Kishor Umrania",
//   age: 63,
//   gender: "Male",
//   medicalHistory: "Low Blood Pressure, Stress, Tension",
//   contact: 7894561230,
//   assignedWard: "General",
// });

// -------------Testing Ward Routes-----------------
// addWard({
//   wardNumber: "W102",
//   capacity: 10,
//   specialization: "ICU",
// });

// findAllWards();

// updateWard("65bf500f755e218b3f8206a1", {
//   wardNumber: "W101",
//   capacity: 50,
//   specialization: "General",
// });

// deleteWard("65bf505ac6d67c047960666c");

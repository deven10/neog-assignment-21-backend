const express = require("express");

const patientRouter = express.Router();
patientRouter.use(express.json());

const {
  addPatient,
  findAllPatients,
  updatePatient,
  deletePatient,
} = require("../Controllers/patient.controller");

// creating a new patient
patientRouter.post("/", async (req, res) => {
  try {
    const body = req.body;
    const patient = await addPatient(body);
    res
      .status(201)
      .json({ message: "New patient added successfully", patient });
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

// fetching all patients
patientRouter.get("/", async (req, res) => {
  try {
    const patients = await findAllPatients();
    if (patients.length > 0) {
      res
        .status(200)
        .json({ message: "patients fetched successfully", patients });
    } else {
      res.status(204).json({ message: "No patient found" });
    }
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

// updating a particular patient
patientRouter.post("/:patientId", async (req, res) => {
  try {
    const patientId = req.params.patientId;
    const body = req.body;
    const patient = await updatePatient(patientId, body);
    if (patient) {
      res
        .status(200)
        .json({ message: "patient updated successfully", patient });
    } else {
      res.status(204).json({ message: "No patient found" });
    }
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

// deleting a particular patient
patientRouter.delete("/:patientId", async (req, res) => {
  try {
    const patientId = req.params.patientId;
    const patient = await deletePatient(patientId);
    if (patient) {
      res
        .status(200)
        .json({ message: "patient deleted successfully", patient });
    } else {
      res.status(204).json({ message: "No patient found" });
    }
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

module.exports = patientRouter;

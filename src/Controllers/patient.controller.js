const Patient = require("../Models/Patient");

// ----------------------------
// for creating new patient
async function addPatient(patientDetails) {
  try {
    const newPatient = new Patient(patientDetails);
    const savedPatient = await newPatient.save();
    console.log("new patient added: ", savedPatient);
    return savedPatient;
  } catch (e) {
    throw e;
  }
}

// ----------------------------
// for getting all Patients
async function findAllPatients() {
  try {
    const patients = await Patient.find();
    console.log("all patients: ", patients);
    return patients;
  } catch (e) {
    throw e;
  }
}

// ----------------------------
// for updating an Patient
async function updatePatient(patientId, patientDetails) {
  try {
    const updatedPatient = await Patient.findByIdAndUpdate(
      patientId,
      patientDetails,
      { new: true, runValidators: true }
    );
    console.log("updatedPatient: ", updatedPatient);
    return updatedPatient;
  } catch (e) {
    throw e;
  }
}

// --------------------------------------
// delete an existing Patient
async function deletePatient(patientId) {
  try {
    const patient = await Patient.findByIdAndDelete(patientId);
    console.log("patient deleted: ", patient);
    return patient;
  } catch (e) {
    throw e;
  }
}

module.exports = { addPatient, findAllPatients, updatePatient, deletePatient };

const Ward = require("../Models/Ward");

// ----------------------------
// for creating new Ward
async function addWard(wardDetails) {
  try {
    const newWard = new Ward(wardDetails);
    const savedWard = await newWard.save();
    console.log("new ward added: ", savedWard);
    return savedWard;
  } catch (e) {
    throw e;
  }
}

// ----------------------------
// for getting all Wards
async function findAllWards() {
  try {
    const wards = await Ward.find();
    console.log("all wards: ", wards);
    return wards;
  } catch (e) {
    throw e;
  }
}

// ----------------------------
// for updating an Ward
async function updateWard(wardId, wardDetails) {
  try {
    const updatedWard = await Ward.findByIdAndUpdate(wardId, wardDetails, {
      new: true,
      runValidators: true,
    });
    console.log("ward updated: ", updatedWard);
    return updatedWard;
  } catch (e) {
    throw e;
  }
}

// --------------------------------------
// delete an existing Ward
async function deleteWard(wardId) {
  try {
    const ward = await Ward.findByIdAndDelete(wardId);
    console.log("deleted ward: ", ward);
    return ward;
  } catch (e) {
    throw e;
  }
}

module.exports = { addWard, findAllWards, updateWard, deleteWard };

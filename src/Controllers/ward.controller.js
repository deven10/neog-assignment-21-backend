const Ward = require("../Models/Ward");

// ----------------------------
// for creating new Ward
async function addWard(wardDetails) {
  try {
    const newWard = new Ward(wardDetails);
    const savedWard = await newWard.save();
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
    return ward;
  } catch (e) {
    throw e;
  }
}

module.exports = { addWard, findAllWards, updateWard, deleteWard };

const express = require("express");

const wardRouter = express.Router();
wardRouter.use(express.json());

const {
  addWard,
  findAllWards,
  updateWard,
  deleteWard,
} = require("../Controllers/ward.controller");

// creating a new ward
wardRouter.post("/", async (req, res) => {
  try {
    const body = req.body;
    const ward = await addWard(body);
    console.log("ward created: ", ward);
    res.status(201).json({ message: "New ward added successfully", ward });
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

// fetching all wards
wardRouter.get("/", async (req, res) => {
  try {
    const wards = await findAllWards();
    if (wards.length > 0) {
      res.status(200).json({ message: "wards fetched successfully", wards });
    } else {
      res.status(204).json({ message: "No ward found" });
    }
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

// updating a particular ward
wardRouter.post("/:wardId", async (req, res) => {
  try {
    const wardId = req.params.wardId;
    const body = req.body;
    const ward = await updateWard(wardId, body);
    if (ward) {
      res.status(200).json({ message: "ward updated successfully", ward });
    } else {
      res.status(204).json({ message: "No ward found" });
    }
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

// deleting a particular ward
wardRouter.delete("/:wardId", async (req, res) => {
  try {
    const wardId = req.params.wardId;
    const ward = await deleteWard(wardId);
    if (ward) {
      res.status(200).json({ message: "ward deleted successfully", ward });
    } else {
      res.status(204).json({ message: "No ward found" });
    }
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

module.exports = wardRouter;

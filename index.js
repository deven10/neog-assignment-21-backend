require("./db");

const patientRouter = require("./src/Routes/patient.routes");
const wardRouter = require("./src/Routes/ward.routes");

const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/patient", patientRouter);
app.use("/api/ward", wardRouter);

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

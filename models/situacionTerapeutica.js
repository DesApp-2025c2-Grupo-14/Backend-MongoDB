const mongoose = require("mongoose");

const situacionSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  fechaInicio: { type: Date, required: true },
  fechaFinal: { type: Date, required: true },
  descripcion: { type: String, required: true },
  pacienteId: { type: Number, required: true }
  });

module.exports = mongoose.model("SituacionTerapeutica", situacionSchema);
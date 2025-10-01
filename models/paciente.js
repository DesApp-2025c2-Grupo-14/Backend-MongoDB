const mongoose = require("mongoose");

const pacienteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  edad: { type: Number, required: true },
  nroAfiliado:{type: String,required: true },
  situacionesTerapeuticas:[{
    type: mongoose.Schema.ObjectId,
    ref: 'SituacionTerapeutica'
  }],
  familia:[{
    type: mongoose.Schema.ObjectId,
    ref: 'Paciente'
  }],
  historialClinico:[{
    type: mongoose.Schema.ObjectId,
    ref: 'HistorialClinico'
  }]
});

module.exports = mongoose.model("Paciente", pacienteSchema);
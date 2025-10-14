const mongoose = require("mongoose");

/* const situacionSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  fechaInicio: { type: Date, required: true },
  fechaFinal: { type: Date, required: true },
  descripcion: { type: String, required: true },
  paciente: {
      type: mongoose.Schema.ObjectId,
      ref: 'Paciente'}
},
{
  collection: 'situacionesTerapeuticas'
});

module.exports = mongoose.model("SituacionTerapeutica", situacionSchema); */

const situacionSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  fechaInicio: {
    type: Date,
    required: true
  },
  fechaFinal: {
    type: Date,
    required:false,
    default:null
  },
  descripcion: {
    type: String,
    required: true
  },
  pacienteId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Paciente',
    required: true
  },
}, {
  collection: 'situacionesTerapeuticas'
});

module.exports = mongoose.model("SituacionTerapeutica", situacionSchema);
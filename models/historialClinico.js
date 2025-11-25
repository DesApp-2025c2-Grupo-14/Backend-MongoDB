const mongoose = require("mongoose");

const historiaClinicaSchema = new mongoose.Schema({
  pacienteId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Paciente',
    required: true
  },
  titulo: {
    type: String,
    required: true
  },
   prestadorId: { // ya que al momento de crear la historia esta es creada por un prestador
    type: mongoose.Schema.ObjectId,
    ref: 'Prestador',
    required: true
  },
  prestador: {
    type: String,
    required: true
  },
  notas: {
    type: String,
    required: true
  },
  fecha: {
    type: Date,
    required: true
  }
}, {
  collection: 'historialesClinicos'
});
// mejora de velocidad en consultas, esta en orden ascendente
historiaClinicaSchema.index({ pacienteId: 1 });
module.exports = mongoose.model("HistoriaClinica", historiaClinicaSchema);

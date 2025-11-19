/* const mongoose = require("mongoose");

const historialSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
  paciente: {
      type: mongoose.Schema.ObjectId,
      ref: 'Paciente'}
},
{
  collection: 'historialesClinicos'
}
);

module.exports = mongoose.model("HistorialClinico", historialSchema); */

const mongoose = require("mongoose");

const historiaClinicaSchema = new mongoose.Schema({
  //aca es distinto al mock, lo relaciono por id del paciente en vez de nroafiliado
  pacienteId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Paciente',
    required: true
  },
  titulo: {
    type: String,
    required: true
  },
/*   descripcion: {
    type: String
  }, */
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

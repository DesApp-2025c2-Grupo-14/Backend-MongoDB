const mongoose = require("mongoose");

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

module.exports = mongoose.model("HistorialClinico", historialSchema);
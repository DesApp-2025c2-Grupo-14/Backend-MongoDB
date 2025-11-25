const mongoose = require("mongoose");

const pacienteSchema = new mongoose.Schema({
  tipoDocumento: { type: String, required: true },
  dni: { type: String, required: true, unique: true },
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  fechaNacimiento: {type: Date, required: true},
  telefono: {type: String, required: true},
  mail: {type: String, required: true},
  direccion: {type: String, required: true},
  nroAfiliado:{type: String,required: true },
  parentesco: {
  type: String,
  enum: ['Titular', 'Cónyuge', 'Hijo','Hija','Familiar a cargo'],
  required: true
},
planMedico: {
  type: String,
  enum: ['210', '310', '410', '510', 'Bronce','Plata', 'Oro', 'Platino'],
  required: true
},
  situacionesTerapeuticas:[{
    type: mongoose.Schema.ObjectId,
    ref: 'SituacionTerapeutica'
  }],
  historialClinico:[{
    type: mongoose.Schema.ObjectId,
    ref: 'HistoriaClinica'
  }]
},
{
  collection: 'pacientes'
});

module.exports = mongoose.model("Paciente", pacienteSchema);
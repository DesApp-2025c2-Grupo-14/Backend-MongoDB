const mongoose = require("mongoose");

const solicitudSchema = new mongoose.Schema({
  
  pacienteId : {
    type: mongoose.Schema.ObjectId,
    ref: 'Paciente',
    required: true
  },
  fechaPrestacion: {
    type: Date
  },
  medico: {
    type: String
  },
  especialidad: {
    type: String
  },
  lugar: {
    type: String
  },
  observaciones: {
    type: String
  },
  estado: { 
    type: String, 
    enum: ['Pendiente', 'En análisis', 'Observada', 'Aprobada', 'Rechazada'], 
    required: true 
  }
},
{
  collection: 'solicitudes'
})

module.exports = mongoose.model("Solicitud", solicitudSchema);
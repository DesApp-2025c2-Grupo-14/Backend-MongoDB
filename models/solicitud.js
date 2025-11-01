const mongoose = require("mongoose");

const solicitudSchema = new mongoose.Schema({
  
  pacienteId : {
    type: mongoose.Schema.ObjectId,
    ref: 'Paciente',
    required: true
  },
  prestadorId : {
    type: mongoose.Schema.ObjectId,
    ref: 'Prestador',
    default: null
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
  motivo: {
    type: String,
    default: null
  },
  tipo:{
    type: String,
    enum: ['Reintegro', 'Autorizacion', 'Receta'],
    required: true 
  },
  estado: { 
    type: String, 
    enum: ['Pendiente', 'En analisis', 'Observada', 'Aprobada', 'Rechazada'], 
    required: true 
  }
},
{
  collection: 'solicitudes'
})

module.exports = mongoose.model("Solicitud", solicitudSchema);
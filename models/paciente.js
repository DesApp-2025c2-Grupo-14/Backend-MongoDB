const mongoose = require("mongoose");

const pacienteSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    unique: true,
    trim: true,
    minlength: [8, 'El nombre debe tener al menos 8 caracteres'],
    maxlength: [12, 'El nombre no puede exceder los 12 caracteres'],

  },
  edad: { 
    type: Number, 
    required: [true, 'La edad es requerida' ],
    min: [0,'La edad debe ser mayor a 0'],
    max: [120,'La edad debe ser menor a 110'],
  },
  nroAfiliado:{
    type: String,
    required: [true, 'el numero de afiliado es necesario'],
    minlength: [6,'La cantidad de caracteres debe ser mayor a 6'],
  }
  ,
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
},
{
  collection: 'pacientes'
});

module.exports = mongoose.model("Paciente", pacienteSchema);
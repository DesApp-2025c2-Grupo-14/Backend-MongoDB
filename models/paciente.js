const mongoose = require("mongoose");

const pacienteSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    unique: true,
    trim: true,
    minlength: [5, 'El nombre debe tener al menos 5  caracteres'],
    maxlength: [50, 'El nombre no puede exceder los 50 caracteres'],

  },
  edad: { 
    type: Number, 
    required: [true, 'La edad es requerida' ],
    min: [0,'La edad debe ser mayor a 0'],
    max: [120,'La edad debe ser menor a 110'],
  },
  email: {
    type: String,
    required: [true, 'El email es obligatorio'],
    unique: true,
    trim: true,
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: 'Debe ser un email válido'
    }
  },
  nroAfiliado:{
    type: String,
    required: [true, 'el numero de afiliado es necesario'],
    minlength: [6,'La cantidad de caracteres debe ser mayor o igual a 6'],
    maxlength: [8, 'La cantidad de caracteres debe ser menor o igual a 8']
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
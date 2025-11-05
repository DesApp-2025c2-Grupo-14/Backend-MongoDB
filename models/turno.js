const mongoose = require('mongoose');

const turnoSchema = new mongoose.Schema({
  fechaHora: {
    type: Date,
    required: true,
  },
  pacienteId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Paciente',
    required: true
  },
},
{
    collection: 'turnos'
});

module.exports = mongoose.model("Turno", turnoSchema);
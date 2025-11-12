const Turno = require("../models/turno");
const Paciente = require("../models/paciente");

async function seedTurnos() {
    const pacientes = await Paciente.find()

    const turnos = [
      {
        fechaHora: new Date('2025-11-03T14:00:00'),
        pacienteId: pacientes[0]._id,
      },
      {
        fechaHora: new Date('2025-11-06T14:00:00'),
        pacienteId: pacientes[1]._id,
      },
      {
        fechaHora: new Date('2025-11-03T13:00:00'),
        pacienteId: pacientes[2]._id,
      }
    ];
    try {
        await Turno.deleteMany({})
        await Turno.insertMany(turnos)
        console.log("turnos insertados")
    } catch (error) {
        console.log('Error al insertar los turnos', error.message)
    }
}

module.exports = {seedTurnos}
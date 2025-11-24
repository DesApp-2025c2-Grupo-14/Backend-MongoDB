const Turno = require("../models/turno");
const Paciente = require("../models/paciente");
const Prestador = require("../models/prestador");

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

async function seedTurnos() {
    const pacientes = await Paciente.find()
    const prestadores = await Prestador.find()
    const turnos = [
      {
        fechaHora: new Date('2025-11-03T09:00:00'),
        pacienteId: pacientes[0]._id,
      },
      {
        fechaHora: new Date('2025-11-03T10:00:00'),
        pacienteId: pacientes[1]._id,
      },
      {
        fechaHora: new Date('2025-11-03T11:00:00'),
        pacienteId: pacientes[2]._id,
      },
      {
        fechaHora: new Date('2025-11-04T14:00:00'),
        pacienteId: pacientes[3]._id,
      },
      {
        fechaHora: new Date('2025-11-05T09:00:00'),
        pacienteId: pacientes[4]._id,
      },
      {
        fechaHora: new Date('2025-11-06T16:00:00'),
        pacienteId: pacientes[5]._id,
      },
      {
        fechaHora: new Date('2025-11-07T13:00:00'),
        pacienteId: pacientes[6]._id,
      },
      {
        fechaHora: new Date('2025-11-08T11:00:00'),
        pacienteId: pacientes[7]._id,
      },
      {
        fechaHora: new Date('2025-11-10T15:00:00'),
        pacienteId: pacientes[8]._id,
      },
      {
        fechaHora: new Date('2025-11-11T10:00:00'),
        pacienteId: pacientes[9]._id,
      },
      {
        fechaHora: new Date('2025-11-12T14:00:00'),
        pacienteId: pacientes[10]._id,
      },
      {
        fechaHora: new Date('2025-11-14T09:00:00'),
        pacienteId: pacientes[11]._id,
      },
      {
        fechaHora: new Date('2025-11-15T16:00:00'),
        pacienteId: pacientes[12]._id,
      },
      {
        fechaHora: new Date('2025-11-18T12:00:00'),
        pacienteId: pacientes[13]._id,
      },
      {
        fechaHora: new Date('2025-11-18T17:00:00'),
        pacienteId: pacientes[14]._id,
      },
      {
        fechaHora: new Date('2025-11-20T08:00:00'),
        pacienteId: pacientes[15]._id,
      },
      {
        fechaHora: new Date('2025-11-21T10:00:00'),
        pacienteId: pacientes[16]._id,
      },
      {
        fechaHora: new Date('2025-11-22T15:00:00'),
        pacienteId: pacientes[17]._id,
      },
      {
        fechaHora: new Date('2025-12-01T09:00:00'),
        pacienteId: pacientes[18]._id,
      },
      {
        fechaHora: new Date('2025-12-02T11:00:00'),
        pacienteId: pacientes[19]._id,
      }
    ].map((t) => {
       let prestador = prestadores[rand(3, prestadores.length - 1)]
       let especialidad = prestador.especialidad

       return {
            ...t,
            especialidad: especialidad
        }
    } );


    try {
        await Turno.deleteMany({})
        await Turno.insertMany(turnos)
        console.log("turnos insertados")
    } catch (error) {
        console.log('Error al insertar los turnos', error.message)
    }

}

module.exports = {seedTurnos}
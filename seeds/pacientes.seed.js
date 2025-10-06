const Paciente = require('../models/paciente')

const pacientes = [
  {
    nombre: "Juan Pérez",
    edad: 34,
    nroAfiliado: "0000001-01"
  },
  {
    nombre: "María Gómez",
    edad: 28,
    nroAfiliado: "0000002-01"
  },
  {
    nombre: "Carlos Sánchez",
    edad: 45,
    nroAfiliado: "0000003-01"
  }
]

async function seedPacientes() {
    
    try {
        await Paciente.deleteMany({})
        await Paciente.insertMany(pacientes)
    } catch (error) {
        console.log('Error al insertar los pacientes', error.message)
    }
}

module.exports = {seedPacientes}
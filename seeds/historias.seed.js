const HistoriaClinica = require('../models/historialClinico')
const Paciente = require('../models/paciente')

async function seedHistoriasClinicas() {
    const pacientes = await Paciente.find()

    const historias = [
      {
        pacienteId: pacientes[0]._id,
        titulo: "Consulta Cardiológica",
        prestador: "Dr. Peralta",
        notas: "Presión arterial alta, recomendar dieta baja en sodio",
        fecha: new Date("2023-03-15")
      },
      {
        pacienteId: pacientes[0]._id,
        titulo: "Consulta Pediátrica",
        prestador: "Dr. Peralta",
        notas: "Control anual completo",
        fecha: new Date("2023-03-15")
      },
      {
        pacienteId: pacientes[0]._id,
        titulo: "Evaluación Neurológica",
        prestador: "Dra. Martínez",
        notas: "Paciente presenta cefaleas frecuentes, se recomienda estudio de resonancia magnética",
        fecha: new Date("2024-09-10")
      },
      {
        pacienteId: pacientes[1]._id,
        titulo: "Control Obstétrico",
        prestador: "Dra. Laura Pérez",
        notas: "Embarazo sin complicaciones",
        fecha: new Date("2023-04-20")
      },
      {
        pacienteId: pacientes[2]._id,
        titulo: "Consulta General",
        prestador: "Dr. Fernández",
        notas: "Se recomienda análisis de sangre",
        fecha: new Date("2023-05-10")
      }
    ];
    try {
        await HistoriaClinica.deleteMany({})
        await HistoriaClinica.insertMany(historias)
    } catch (error) {
        console.log('Error al insertar las historias', error.message)
    }
}

module.exports = {seedHistoriasClinicas}
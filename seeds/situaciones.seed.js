const SituacionTerapeutica = require("../models/situacionTerapeutica");
const Paciente = require("../models/paciente");

async function seedSituacionesTerapeuticas() {
    const pacientes = await Paciente.find()

    const situaciones = [
      {
        pacienteId: pacientes[0]._id,
        titulo: "Embarazo",
        fechaInicio: new Date("2025-08-02"),
        // aca dejo la fecha vacia
        descripcion: "Control prenatal trimestral",
        activa: true
      },
      {
        pacienteId: pacientes[0]._id,
        titulo: "Neumonía",
        fechaInicio: new Date("2025-07-10"),
        fechaFinal: new Date("2025-07-30"),
        descripcion: "Internación breve y tratamiento antibiótico completo",
        activa: true
      },
      {
        pacienteId: pacientes[1]._id,
        titulo: "Esguince",
        fechaInicio: new Date("2025-02-15"),
        fechaFinal: new Date("2025-03-25"),
        descripcion: "Esguince leve de tobillo izquierdo. Uso de férula",
        activa: true
      },
      {
        pacienteId: pacientes[2]._id,
        titulo: "Fractura",
        fechaInicio: new Date("2025-03-11"),
        fechaFinal: new Date("2025-04-22"),
        descripcion: "Fractura de tibia derecha. Rehabilitación en curso",
        activa: true
      },
    ];
    try {
        await SituacionTerapeutica.deleteMany({})
        await SituacionTerapeutica.insertMany(situaciones)
        console.log("Situaciones insertadas")
    } catch (error) {
        console.log('Error al insertar las situaciones', error.message)
    }
}

module.exports = {seedSituacionesTerapeuticas}
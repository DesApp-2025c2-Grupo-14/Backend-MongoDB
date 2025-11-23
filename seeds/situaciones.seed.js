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
      {
        pacienteId: pacientes[0]._id,
        titulo: "Embarazo",
        fechaInicio: new Date("2025-08-02"),
        descripcion: "Control prenatal trimestral",
        activa: true
      },
      {
        pacienteId: pacientes[0]._id,
        titulo: "Neumonía",
        fechaInicio: new Date("2025-07-10"),
        fechaFinal: new Date("2025-07-30"),
        descripcion: "Internación breve y tratamiento antibiótico completo",
        activa: false
      },
      {
        pacienteId: pacientes[0]._id,
        titulo: "Anemia",
        fechaInicio: new Date("2025-01-20"),
        descripcion: "Tratamiento con suplemento de hierro",
        activa: true
      },
      {
        pacienteId: pacientes[1]._id,
        titulo: "Esguince",
        fechaInicio: new Date("2025-02-15"),
        fechaFinal: new Date("2025-03-25"),
        descripcion: "Esguince leve de tobillo izquierdo. Uso de férula",
        activa: false
      },
      {
        pacienteId: pacientes[1]._id,
        titulo: "Bronquitis",
        fechaInicio: new Date("2025-06-05"),
        descripcion: "Cuadro respiratorio con seguimiento mensual",
        activa: true
      },
      {
        pacienteId: pacientes[1]._id,
        titulo: "Diabetes tipo 2",
        fechaInicio: new Date("2024-11-12"),
        descripcion: "Control metabólico con medicación oral",
        activa: true
      },
      {
        pacienteId: pacientes[2]._id,
        titulo: "Fractura",
        fechaInicio: new Date("2025-03-11"),
        fechaFinal: new Date("2025-04-22"),
        descripcion: "Fractura de tibia derecha. Rehabilitación en curso",
        activa: false
      },
      {
        pacienteId: pacientes[2]._id,
        titulo: "Hipotiroidismo",
        fechaInicio: new Date("2024-09-01"),
        descripcion: "Control endocrinológico y tratamiento hormonal",
        activa: true
      },
      {
        pacienteId: pacientes[2]._id,
        titulo: "Alergia Estacional",
        fechaInicio: new Date("2025-09-10"),
        descripcion: "Tratamiento antihistamínico mientras dure el cuadro",
        activa: true
      },
      {
        pacienteId: pacientes[3]._id,
        titulo: "Lumbalgia",
        fechaInicio: new Date("2025-04-18"),
        descripcion: "Tratamiento con fisioterapia semanal",
        activa: true
      },
      {
        pacienteId: pacientes[3]._id,
        titulo: "Dermatitis",
        fechaInicio: new Date("2025-02-02"),
        fechaFinal: new Date("2025-02-22"),
        descripcion: "Uso de cremas tópicas y control dermatológico",
        activa: false
      },
      {
        pacienteId: pacientes[3]._id,
        titulo: "Ansiedad Generalizada",
        fechaInicio: new Date("2024-12-10"),
        descripcion: "Seguimiento psiquiátrico y terapia cognitiva",
        activa: true
      },
      {
        pacienteId: pacientes[4]._id,
        titulo: "Hipertensión",
        fechaInicio: new Date("2024-10-05"),
        descripcion: "Control clínico frecuente y medicación diaria",
        activa: true
      },
      {
        pacienteId: pacientes[4]._id,
        titulo: "Gastroenteritis",
        fechaInicio: new Date("2025-01-14"),
        fechaFinal: new Date("2025-01-19"),
        descripcion: "Rehidratación oral y dieta blanda",
        activa: false
      },
      {
        pacienteId: pacientes[4]._id,
        titulo: "Tendinitis",
        fechaInicio: new Date("2025-07-11"),
        descripcion: "Sesiones semanales de kinesiología",
        activa: true
      },
      {
        pacienteId: pacientes[5]._id,
        titulo: "Migraña Crónica",
        fechaInicio: new Date("2024-08-20"),
        descripcion: "Tratamiento preventivo y seguimiento mensual",
        activa: true
      },
      {
        pacienteId: pacientes[5]._id,
        titulo: "Otitis",
        fechaInicio: new Date("2025-02-03"),
        fechaFinal: new Date("2025-02-12"),
        descripcion: "Tratamiento con antibióticos",
        activa: false
      },
      {
        pacienteId: pacientes[5]._id,
        titulo: "Contractura Cervical",
        fechaInicio: new Date("2025-09-05"),
        descripcion: "Ejercicios de estiramiento y fisioterapia",
        activa: true
      },
      {
        pacienteId: pacientes[6]._id,
        titulo: "Asma Leve",
        fechaInicio: new Date("2024-11-01"),
        descripcion: "Inhalador de rescate + control anual",
        activa: true
      },
      {
        pacienteId: pacientes[6]._id,
        titulo: "Gripe",
        fechaInicio: new Date("2025-06-07"),
        fechaFinal: new Date("2025-06-14"),
        descripcion: "Tratamiento sintomático",
        activa: false
      },
      {
        pacienteId: pacientes[6]._id,
        titulo: "Luxación de Hombro",
        fechaInicio: new Date("2025-03-18"),
        descripcion: "Rehabilitación física en curso",
        activa: true
      },
      {
        pacienteId: pacientes[7]._id,
        titulo: "Trastorno del Sueño",
        fechaInicio: new Date("2025-04-02"),
        descripcion: "Terapia cognitivo conductual para el insomnio",
        activa: true
      },
      {
        pacienteId: pacientes[7]._id,
        titulo: "Infección Urinaria",
        fechaInicio: new Date("2025-07-10"),
        fechaFinal: new Date("2025-07-18"),
        descripcion: "Tratamiento antibiótico",
        activa: false
      },
      {
        pacienteId: pacientes[7]._id,
        titulo: "Dolor Lumbar",
        fechaInicio: new Date("2025-09-21"),
        descripcion: "Sesiones de fisioterapia",
        activa: true
      },
      {
        pacienteId: pacientes[8]._id,
        titulo: "Colesterol Alto",
        fechaInicio: new Date("2024-12-05"),
        descripcion: "Dieta y medicación",
        activa: true
      },
      {
        pacienteId: pacientes[8]._id,
        titulo: "Tendinitis Rotuliana",
        fechaInicio: new Date("2025-05-11"),
        descripcion: "Rehabilitación y estiramiento",
        activa: true
      },
      {
        pacienteId: pacientes[8]._id,
        titulo: "Gastritis",
        fechaInicio: new Date("2025-02-19"),
        fechaFinal: new Date("2025-03-05"),
        descripcion: "Tratamiento con inhibidores de bomba de protones",
        activa: false
      }
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
const SituacionTerapeutica = require("../models/situacionTerapeutica");
const Paciente = require("../models/paciente");

async function seedSituacionesTerapeuticas() {
    const pacientes = await Paciente.find()

    const situaciones = [
      // flia gonzalez
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
      // flia perez
      {
        pacienteId: pacientes[3]._id,
        titulo: "Fiebre y resfrío",
        fechaInicio: new Date("2025-05-11"),
        fechaFinal: new Date("2025-05-22"),
        descripcion: "Síntomas leves de resfrío con fiebre ocasional. Tratamiento sintomático",
        activa: true
      },
    // Federico
  {
    pacienteId: pacientes[4]._id,
    titulo: "Chequeo Cardiológico",
    fechaInicio: new Date("2023-05-10"),
    descripcion: "Revisión cardiológica anual, presión arterial normal",
    activa: true
  },
  {
    pacienteId: pacientes[4]._id,
    titulo: "Control de Colesterol",
    fechaInicio: new Date("2024-01-15"),
    fechaFinal: new Date("2024-01-15"),
    descripcion: "Niveles dentro del rango recomendado",
    activa: true
  },
  // Carolina
  {
    pacienteId: pacientes[5]._id,
    titulo: "Consulta Ginecológica",
    fechaInicio: new Date("2023-06-20"),
    fechaFinal: new Date("2023-06-20"),
    descripcion: "Control anual, sin novedades",
    activa: true
  },
  {
    pacienteId: pacientes[6]._id,
    titulo: "Control de Vitamina D",
    fechaInicio: new Date("2024-03-10"),
    fechaFinal: new Date("2024-03-10"),
    descripcion: "Nivel adecuado",
    activa: true
  },
  // Lucas
  {
    pacienteId: pacientes[7]._id,
    titulo: "Consulta Pediátrica",
    fechaInicio: new Date("2023-08-05"),
    fechaFinal: new Date("2023-08-05"),
    descripcion: "Vacunas al día, desarrollo normal",
    activa: true
  },
  {
    pacienteId: pacientes[7]._id,
    titulo: "Control Dental",
    fechaInicio: new Date("2024-02-20"),
    fechaFinal: new Date("2024-02-20"),
    descripcion: "Revisión dental sin problemas",
    activa: true
  },
    // Alejandro
  {
    pacienteId: pacientes[8]._id,
    titulo: "Chequeo Cardiológico",
    fechaInicio: new Date("2023-04-12"),
    descripcion: "Control anual, presión arterial normal",
    activa: true
  },
  {
    pacienteId: pacientes[8]._id,
    titulo: "Control de Colesterol",
    fechaInicio: new Date("2024-01-20"),
    fechaFinal: new Date("2024-01-20"),
    descripcion: "Niveles de colesterol dentro del rango recomendado",
    activa: true
  },
  // Verónica
  {
    pacienteId: pacientes[9]._id,
    titulo: "Consulta Ginecológica",
    fechaInicio: new Date("2023-05-18"),
    fechaFinal: new Date("2023-05-18"),
    descripcion: "Control anual, sin novedades",
    activa: true
  },
  {
    pacienteId: pacientes[9]._id,
    titulo: "Control de Vitamina D",
    fechaInicio: new Date("2024-03-10"),
    fechaFinal: new Date("2024-03-10"),
    descripcion: "Nivel adecuado",
    activa: true
  },
  // Martín
  {
    pacienteId: pacientes[10]._id,
    titulo: "Consulta Pediátrica",
    fechaInicio: new Date("2023-06-15"),
    fechaFinal: new Date("2023-06-15"),
    descripcion: "Vacunas al día, crecimiento normal",
    activa: true
  },
  {
    pacienteId: pacientes[10]._id,
    titulo: "Control Dental",
    fechaInicio: new Date("2024-02-28"),
    fechaFinal: new Date("2024-02-28"),
    descripcion: "Revisión dental sin problemas",
    activa: true
  },
  // Camila
  {
    pacienteId: pacientes[11]._id,
    titulo: "Consulta Pediátrica",
    fechaInicio: new Date("2023-07-10"),
    fechaFinal: new Date("2023-07-10"),
    descripcion: "Vacunas al día, desarrollo normal",
    activa: true
  },
  {
    pacienteId: pacientes[11]._id,
    titulo: "Control Oftalmológico",
    fechaInicio: new Date("2024-03-15"),
    fechaFinal: new Date("2024-03-15"),
    descripcion: "Revisión de la vista, sin problemas",
    activa: true
  }
    ];
    try {
        await SituacionTerapeutica.deleteMany({})
        const situacionesInsertadas = await SituacionTerapeutica.insertMany(situaciones);
        // actualizo paciente para agregar referencia a la situacion, uso promise.all por velocidad
        // podria usarse el for tambien ya que agregaria mas claridad si falla alguna insercion
        await Promise.all(situacionesInsertadas.map(async (situacion) => {
            await Paciente.findByIdAndUpdate(
              situacion.pacienteId,
              { $push: { situacionesTerapeuticas: situacion._id } }
            );
        }));
/*         for (const situacion of situacionesInsertadas) {
            await Paciente.findByIdAndUpdate(
              situacion.pacienteId,
              { $push: { situacionesTerapeuticas: situacion._id } }
            );
        } */
        console.log("Situaciones insertadas")
    } catch (error) {
        console.log('Error al insertar las situaciones', error.message)
    }
}

module.exports = {seedSituacionesTerapeuticas}
const SituacionTerapeutica = require("../models/situacionTerapeutica");
const Paciente = require("../models/paciente");

async function seedSituacionesTerapeuticas() {
    const pacientes = await Paciente.find()

    const situaciones = [
      // flia gonzalez
      {
        titulo: "Hipertensión arterial crónica",
        fechaInicio: new Date("2025-12-10"),
        fechaFinal: null,
        descripcion: "Control periódico por hipertensión diagnosticada. Se requiere monitoreo de presión arterial, ajustes de medicación y seguimiento mensual.",
        pacienteId: pacientes[0]._id,
        activa: true
      },
      {
        titulo: "Cardiopatía isquémica crónica",
        fechaInicio: new Date("2025-09-12"),
        fechaFinal: null,
        descripcion: "En tratamiento por cardiopatía isquémica. Se realizan controles cardiológicos regulares y ajuste de tratamiento según evolución.",
        pacienteId: pacientes[0]._id,
        activa: true
      },
      {
        titulo: "Embarazo",
        fechaInicio: new Date("2024-02-01"),
        fechaFinal: new Date("2024-11-10"),
        descripcion: "Seguimiento obstétrico completo durante el embarazo sin complicaciones. Se registran controles y ecografías mensuales.",
        pacienteId: pacientes[0]._id,
        activa: false
      },      
      {
        titulo: "Asma persistente moderada",
        fechaInicio: new Date("2024-09-15"),
        fechaFinal: null,
        descripcion: "Paciente con asma persistente. Requiere inhaladores de mantenimiento, controles periódicos y evitar factores desencadenantes.",
        pacienteId: pacientes[1]._id,
        activa: true
      },
      {
        titulo: "Fractura de clavícula - Recuperación funcional",
        fechaInicio: "2025-01-15",
        fechaFinal: null, 
        descripcion: "Paciente con fractura de clavícula izquierda tratada con inmovilización y posterior rehabilitación. Requiere controles traumatológicos periódicos y sesiones de kinesiología para recuperar movilidad y fuerza en el hombro.",
        pacienteId: pacientes[1]._id,
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
        titulo: "Diabetes tipo 2",
        fechaInicio: new Date("2022-03-10"),
        fechaFinal: null,
        descripcion: "Control metabólico, medicación oral y monitoreo de glucemias. Evaluación anual de pie diabético y fondo de ojo.",
        activa: true
      },
    // Federico
  {
    pacienteId: pacientes[4]._id,
    titulo: "Rehabilitación post cirugía de rodilla",
    fechaInicio: new Date("2025-01-15"),
    fechaFinal: new Date("2025-04-15"),
    descripcion: "Recuperación prolongada tras artroscopia de rodilla. Ejercicios de movilidad y fortalecimiento.",
    activa: true
  },
  {
    pacienteId: pacientes[4]._id,
    titulo: "Asma persistente moderada",
    fechaInicio: new Date("2019-11-12"),
    fechaFinal: null,
    descripcion: "Tratamiento inhalatorio de mantenimiento. Control de crisis y seguimiento neumonológico.",
    activa: true
  },
  // Carolina
  {
    pacienteId: pacientes[5]._id,
    titulo: "Artritis reumatoide",
    fechaInicio: new Date("2019-12-10"),
    fechaFinal: null,
    descripcion: "Control reumatológico crónico con medicación inmunomoduladora.",
    activa: true
  },
  // Lucas
  {
    pacienteId: pacientes[7]._id,
    titulo: "Migraña crónica",
    fechaInicio: new Date("2021-09-30"),
    fechaFinal: null,
    descripcion: "Cefaleas frecuentes con tratamiento preventivo y abortivo.",
    activa: true
  },

    // Alejandro
  {
    pacienteId: pacientes[12]._id,
    titulo: "EPOC",
    fechaInicio: new Date("2019-03-01"),
    fechaFinal: null,
    descripcion: "Tratamiento broncodilatador y controles periódicos.",
    activa: true
  },
  // Verónica
  {
    pacienteId: pacientes[9]._id,
    titulo: "Hipotiroidismo",
    fechaInicio: new Date("2016-01-01"),
    fechaFinal: null,
    descripcion: "Control endocrinológico y ajuste de levotiroxina.",
    activa: true
  },
  // Martín
  {
    pacienteId: pacientes[10]._id,
    titulo: "Rinitis alérgica crónica",
    fechaInicio: new Date("2024-09-12"),
    fechaFinal: null,
    descripcion: "Sensibilización a ácaros con tratamiento antihistamínico continuo.",
    activa: true
  },
  // Camila
  {
    pacienteId: pacientes[11]._id,
    titulo: "Hernia cervical",
    fechaInicio: new Date("2023-10-05"),
    fechaFinal: null,
    descripcion: "Dolor cervical con irradiación a miembro superior. Tratamiento kinésico prolongado.",
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
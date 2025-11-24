const HistoriaClinica = require('../models/historialClinico')
const Paciente = require('../models/paciente')

async function seedHistoriasClinicas() {
    const pacientes = await Paciente.find()

    const historias = [
      {
        pacienteId: pacientes[0]._id,
        titulo: "Consulta Cardiológica",
        prestador: "Dr. Zed",
        notas: "Presión arterial alta, recomendar dieta baja en sodio",
        fecha: new Date("2023-03-15")
      },
      {
        pacienteId: pacientes[0]._id,
        titulo: "Consulta Pediátrica",
        prestador: "Dr. Pliskin",
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
      },
      {
        pacienteId: pacientes[0]._id,
        titulo: "Consulta Cardiológica",
        prestador: "Dr. Zed",
        notas: "Presión arterial alta. Recomendación: dieta baja en sodio.",
        fecha: new Date("2024-02-10")
      },
      {
        pacienteId: pacientes[0]._id,
        titulo: "Control General",
        prestador: "Dr. Vega",
        notas: "Buen estado general. Se sugiere continuar actividad física.",
        fecha: new Date("2024-03-12")
      },
      {
        pacienteId: pacientes[0]._id,
        titulo: "Estudio de Laboratorio",
        prestador: "Bioquímica Torres",
        notas: "Valores dentro de parámetros normales.",
        fecha: new Date("2024-05-03")
      },
      {
        pacienteId: pacientes[0]._id,
        titulo: "Evaluación Neurológica",
        prestador: "Dra. Martínez",
        notas: "Cefaleas frecuentes. Se recomienda resonancia.",
        fecha: new Date("2024-09-10")
      },
      {
        pacienteId: pacientes[0]._id,
        titulo: "Consulta Nutricional",
        prestador: "Lic. Ramírez",
        notas: "Plan alimenticio personalizado.",
        fecha: new Date("2024-10-22")
      },

      // ==== Paciente 1 ====
      {
        pacienteId: pacientes[1]._id,
        titulo: "Consulta Ginecológica",
        prestador: "Dra. Laura Pérez",
        notas: "Chequeo de rutina. Resultados normales.",
        fecha: new Date("2024-01-18")
      },
      {
        pacienteId: pacientes[1]._id,
        titulo: "Control Obstétrico",
        prestador: "Dra. Laura Pérez",
        notas: "Embarazo sin complicaciones.",
        fecha: new Date("2023-04-20")
      },
      {
        pacienteId: pacientes[1]._id,
        titulo: "Análisis Clínicos",
        prestador: "Laboratorio Central",
        notas: "Se observan valores de hierro levemente bajos.",
        fecha: new Date("2024-06-12")
      },
      {
        pacienteId: pacientes[1]._id,
        titulo: "Consulta Nutricional",
        prestador: "Lic. D'Amato",
        notas: "Ajustes en la dieta para mejorar energía.",
        fecha: new Date("2024-08-01")
      },
      {
        pacienteId: pacientes[1]._id,
        titulo: "Consulta Dermatológica",
        prestador: "Dr. Quiroga",
        notas: "Tratamiento tópico para irritación leve.",
        fecha: new Date("2024-09-27")
      },

      // ==== Paciente 2 ====
      {
        pacienteId: pacientes[2]._id,
        titulo: "Consulta General",
        prestador: "Dr. Fernández",
        notas: "Se recomienda análisis de sangre.",
        fecha: new Date("2023-05-10")
      },
      {
        pacienteId: pacientes[2]._id,
        titulo: "Estudio Cardiológico",
        prestador: "Dr. Pereyra",
        notas: "Electrocardiograma normal.",
        fecha: new Date("2024-01-26")
      },
      {
        pacienteId: pacientes[2]._id,
        titulo: "Control de Presión",
        prestador: "Enfermería",
        notas: "Presión estable.",
        fecha: new Date("2024-03-08")
      },
      {
        pacienteId: pacientes[2]._id,
        titulo: "Evaluación Traumatológica",
        prestador: "Dr. Campos",
        notas: "Dolor lumbar, se recomienda fisioterapia.",
        fecha: new Date("2024-07-14")
      },
      {
        pacienteId: pacientes[2]._id,
        titulo: "Consulta Oftalmológica",
        prestador: "Dra. Torres",
        notas: "Ajuste de graduación.",
        fecha: new Date("2024-10-19")
      },
      {
      pacienteId: pacientes[3]._id,
      titulo: "Consulta Otorrinolaringológica",
      prestador: "Dr. Benítez",
      notas: "Rinitis alérgica, se indica antihistamínico.",
      fecha: new Date("2024-01-14")
    },
    {
      pacienteId: pacientes[3]._id,
      titulo: "Control General",
      prestador: "Dr. Pérez",
      notas: "Examen normal. Peso dentro de lo adecuado.",
      fecha: new Date("2024-03-21")
    },
    {
      pacienteId: pacientes[3]._id,
      titulo: "Consulta Traumatológica",
      prestador: "Dr. Suárez",
      notas: "Dolor en rodilla, se recomienda resonancia.",
      fecha: new Date("2024-06-09")
    },
    {
      pacienteId: pacientes[3]._id,
      titulo: "Terapia Física",
      prestador: "Lic. Borghino",
      notas: "Mejoría parcial, continuar ejercicios.",
      fecha: new Date("2024-07-01")
    },
    {
      pacienteId: pacientes[3]._id,
      titulo: "Análisis Clínicos",
      prestador: "Laboratorio Diagnos",
      notas: "Vitamina D baja, iniciar suplemento.",
      fecha: new Date("2024-09-12")
    },
    {
      pacienteId: pacientes[4]._id,
      titulo: "Consulta Nutricional",
      prestador: "Lic. Cabrera",
      notas: "Plan para bajar de peso.",
      fecha: new Date("2023-12-11")
    },
    {
      pacienteId: pacientes[4]._id,
      titulo: "Evaluación General",
      prestador: "Dr. Medina",
      notas: "Dolores musculares leves.",
      fecha: new Date("2024-02-03")
    },
    {
      pacienteId: pacientes[4]._id,
      titulo: "Consulta Cardiológica",
      prestador: "Dr. Zárate",
      notas: "Taquicardia leve, se indica control.",
      fecha: new Date("2024-05-07")
    },
    {
      pacienteId: pacientes[4]._id,
      titulo: "Radiografía de Tórax",
      prestador: "Centro de Imágenes Sur",
      notas: "Sin alteraciones.",
      fecha: new Date("2024-06-15")
    },
    {
      pacienteId: pacientes[4]._id,
      titulo: "Consulta Dermatológica",
      prestador: "Dra. Loguzzo",
      notas: "Dermatitis leve, se indica cremas tópicas.",
      fecha: new Date("2024-08-29")
    },
    {
      pacienteId: pacientes[5]._id,
      titulo: "Consulta General",
      prestador: "Dr. Valenti",
      notas: "Gripe. Se recomienda reposo.",
      fecha: new Date("2024-04-04")
    },
    {
      pacienteId: pacientes[5]._id,
      titulo: "Estudio de Sangre",
      prestador: "Laboratorio Clínico Central",
      notas: "Hemograma normal.",
      fecha: new Date("2024-05-12")
    },
    {
      pacienteId: pacientes[5]._id,
      titulo: "Evaluación Fonoaudiológica",
      prestador: "Lic. Freire",
      notas: "Mejoría en dicción.",
      fecha: new Date("2024-06-20")
    },
    {
      pacienteId: pacientes[5]._id,
      titulo: "Consulta Neurológica",
      prestador: "Dr. Savino",
      notas: "Mareos esporádicos, se ordena TAC.",
      fecha: new Date("2024-07-30")
    },
    {
      pacienteId: pacientes[5]._id,
      titulo: "Consulta Odontológica",
      prestador: "Dra. González",
      notas: "Carie tratada.",
      fecha: new Date("2024-09-14")
    },
    {
      pacienteId: pacientes[6]._id,
      titulo: "Control Pediátrico",
      prestador: "Dra. Nerea López",
      notas: "Desarrollo normal.",
      fecha: new Date("2024-01-10")
    },
    {
      pacienteId: pacientes[6]._id,
      titulo: "Vacunación",
      prestador: "Enfermería",
      notas: "Se aplicó vacuna triple viral.",
      fecha: new Date("2024-03-05")
    },
    {
      pacienteId: pacientes[6]._id,
      titulo: "Consulta Oftalmológica",
      prestador: "Dra. Ferreyra",
      notas: "Miopía leve, se recetan anteojos.",
      fecha: new Date("2024-05-17")
    },
    {
      pacienteId: pacientes[6]._id,
      titulo: "Consulta Clínica",
      prestador: "Dr. Giralt",
      notas: "Cuadro viral leve.",
      fecha: new Date("2024-07-09")
    },
    {
      pacienteId: pacientes[6]._id,
      titulo: "Consulta Fonoaudiológica",
      prestador: "Lic. Solari",
      notas: "Afección leve en pronunciación.",
      fecha: new Date("2024-10-03")
    },
    {
      pacienteId: pacientes[7]._id,
      titulo: "Consulta Cardiológica",
      prestador: "Dr. Vázquez",
      notas: "Soplo grado I, control anual.",
      fecha: new Date("2024-02-19")
    },
    {
      pacienteId: pacientes[7]._id,
      titulo: "Tomografía",
      prestador: "Centro Diagnóstico Norte",
      notas: "Sin hallazgos relevantes.",
      fecha: new Date("2024-04-26")
    },
    {
      pacienteId: pacientes[7]._id,
      titulo: "Consulta Psiquiátrica",
      prestador: "Dr. Ledesma",
      notas: "Ansiedad leve, se indica terapia.",
      fecha: new Date("2024-07-13")
    },
    {
      pacienteId: pacientes[7]._id,
      titulo: "Terapia Cognitivo Conductual",
      prestador: "Lic. Bruni",
      notas: "Buena evolución.",
      fecha: new Date("2024-08-02")
    },
    {
      pacienteId: pacientes[7]._id,
      titulo: "Control General",
      prestador: "Dr. Sánchez",
      notas: "Sin complicaciones.",
      fecha: new Date("2024-09-28")
    },
    {
      pacienteId: pacientes[8]._id,
      titulo: "Control Nutricional",
      prestador: "Lic. López",
      notas: "Plan alimentario renovado.",
      fecha: new Date("2024-01-29")
    },
    {
      pacienteId: pacientes[8]._id,
      titulo: "Consulta Endocrinológica",
      prestador: "Dr. Molina",
      notas: "Control de tiroides, valores normales.",
      fecha: new Date("2024-03-11")
    },
    {
      pacienteId: pacientes[8]._id,
      titulo: "Consulta Cardiológica",
      prestador: "Dr. Capellini",
      notas: "Arritmia leve, se realiza seguimiento.",
      fecha: new Date("2024-05-19")
    },
    {
      pacienteId: pacientes[8]._id,
      titulo: "Análisis de Orina",
      prestador: "Laboratorio Central",
      notas: "Normal.",
      fecha: new Date("2024-09-12")
    },
    {
      pacienteId: pacientes[8]._id,
      titulo: "Consulta Oftalmológica",
      prestador: "Dra. Reyes",
      notas: "Astigmatismo moderado.",
      fecha: new Date("2024-10-01")
    },
    {
      pacienteId: pacientes[9]._id,
      titulo: "Consulta General",
      prestador: "Dr. Torres",
      notas: "Dolor abdominal, se indica ecografía.",
      fecha: new Date("2024-03-23")
    },
    {
      pacienteId: pacientes[9]._id,
      titulo: "Ecografía Abdominal",
      prestador: "Diagnóstico Sur",
      notas: "Sin anomalías.",
      fecha: new Date("2024-04-01")
    },
    {
      pacienteId: pacientes[9]._id,
      titulo: "Consulta Gastroenterológica",
      prestador: "Dr. Bianchi",
      notas: "Sospecha de gastritis.",
      fecha: new Date("2024-06-14")
    },
    {
      pacienteId: pacientes[9]._id,
      titulo: "Endoscopía",
      prestador: "Centro Endoscópico",
      notas: "Gastritis leve detectada.",
      fecha: new Date("2024-07-05")
    },
    {
      pacienteId: pacientes[9]._id,
      titulo: "Control Post-Endoscopía",
      prestador: "Dr. Bianchi",
      notas: "Buena evolución.",
      fecha: new Date("2024-08-16")
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
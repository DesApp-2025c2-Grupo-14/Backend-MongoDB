const HistoriaClinica = require('../models/historialClinico');
const Paciente = require('../models/paciente');
const Prestador = require('../models/prestador');

async function seedHistoriasClinicas() {

    const pacientes = await Paciente.find();
    const prestadores = await Prestador.find();

const historias = [
  // Paciente 0 // maria gonzalez
 {
    pacienteId: pacientes[0]._id,
    titulo: "Consulta Cardiológica rutinaria",
    prestadorId: prestadores[3]._id, // Dr. Hernan Gutierrrez
    prestador: prestadores[3].nombre,
    notas: "Presión arterial alta, se ajusta medicación.",
    fecha: new Date("2025-12-04")
  },
  {
    pacienteId: pacientes[0]._id,
    titulo: "Consulta Traumatología",
    prestadorId: prestadores[5]._id,
    prestador: prestadores[5].nombre,
    notas: "Dolor en hombro tras caída, se indica fisioterapia.",
    fecha: new Date("2025-11-12")
  },
  {
    pacienteId: pacientes[0]._id, 
    titulo: "Control de hipertensión arterial crónica",
    prestadorId: prestadores[9]._id,
    prestador: prestadores[9].nombre,
    notas: "PA en consultorio 150/95 mmHg. Refiere buena adherencia, sin síntomas de alarma. Se mantiene medicación y se programa control.",
    fecha: new Date("2025-12-20"),
  },
  {
    pacienteId: pacientes[0]._id,
    titulo: "Consulta Nutricional",
    prestadorId: prestadores[4]._id, // Dra. Laura Pérez
    prestador: prestadores[4].nombre,
    notas: "Se revisa plan de alimentación, se incorpora más fibra y vegetales",
    fecha: new Date("2025-11-01")
  },
  {
    pacienteId: pacientes[0]._id,
    titulo: "Consulta Neurológica",
    prestadorId: prestadores[5]._id,
    prestador: prestadores[5].nombre,
    notas: "Paciente presenta episodios de migraña, se prescribe medicación preventiva",
    fecha: new Date("2025-11-01")
  },
  {
    pacienteId: pacientes[0]._id,
    titulo: "Control Cardiológico de Seguimiento",
    prestadorId: prestadores[3]._id,
    prestador: prestadores[3].nombre, // Dr. Hernan Gutierrrez
    notas: "Presión arterial dentro de rango normal, medicación ajustada correctamente",
    fecha: new Date("2024-05-15")
  },
  // Paciente 2 // martin gonzalez
  {
    pacienteId: pacientes[2]._id,
    titulo: "Consulta Anual",
    prestadorId: prestadores[4]._id, // Dra. Laura Pérez
    prestador: prestadores[4].nombre,
    notas: "Control anual completo",
    fecha: new Date("2025-06-15")
  },
  {
    pacienteId: pacientes[2]._id,
    titulo: "Fractura de muñeca, seguimiento",
    prestadorId: prestadores[5]._id, 
    prestador: prestadores[5].nombre,
    notas: "Retirar yeso en 2 semanas.",
    fecha: new Date("2025-11-02"),
  },
  {
    // martin gonzalez
    pacienteId: pacientes[2]._id,
    titulo: "Evaluación Neurológica",
    prestadorId: prestadores[6]._id, // carvajal
    prestador: prestadores[6].nombre,
    notas: "Paciente presenta cefaleas frecuentes, se recomienda estudio de resonancia magnética",
    fecha: new Date("2024-09-10")
  },

  // Paciente 1 // lucia gonzalez
  {
    pacienteId: pacientes[1]._id,
    titulo: "Control Obstétrico",
    prestadorId: prestadores[10]._id, // Dra. paisa
    prestador: prestadores[10].nombre,
    notas: "Embarazo sin complicaciones",
    fecha: new Date("2023-04-20")
  },
  {
    pacienteId: pacientes[1]._id, 
    titulo: "Consulta por dolor de pecho",
    prestadorId: prestadores[6]._id, // Dr. carvajal
    prestador: prestadores[6].nombre,
    notas: "Posible derivación a cardiología.",
    fecha: new Date("2025-11-03"),
  },
  // Paciente 3 // jorge perez
  {
    pacienteId: pacientes[3]._id,
    titulo: "Chequeo Cardiológico",
    prestadorId: prestadores[5]._id, // Dr. Pablo Rodríguez
    prestador: prestadores[5].nombre,
    notas: "Se recomienda electrocardiograma",
    fecha: new Date("2025-08-10")
  },
  {
    pacienteId: pacientes[3]._id,
    titulo: "Exámenes de rutina",
    prestadorId: prestadores[12]._id, // Dr. Horacio Chain
    prestador: prestadores[12].nombre,
    notas: "Pendiente resultados de laboratorio.",
    fecha: new Date("2025-10-04"),
  },
  // Paciente 4 luis rodriguez
  {
    pacienteId: pacientes[4]._id,
    titulo: "Chequeo Cardiológico",
    prestadorId: prestadores[3]._id, // Dr. Hernan Gutierrrez
    prestador: prestadores[3].nombre,
    notas: "Presión arterial normal, todo bien",
    fecha: new Date("2025-05-10")
  },
  {
    pacienteId: pacientes[4]._id,
    titulo: "Esguince de tobillo, control",
    prestadorId: prestadores[5]._id, 
    prestador: prestadores[5].nombre,
    notas: "El paciente evoluciona favorablemente.",
    fecha: new Date("2025-12-01"),
  },
  // Paciente 5 (florencia rodriguez)
  {
    pacienteId: pacientes[5]._id,
    titulo: "Consulta Ginecológica",
    prestadorId: prestadores[4]._id, // Dra. Laura Pérez
    prestador: prestadores[4].nombre,
    notas: "Control anual, sin novedades",
    fecha: new Date("2024-06-20")
  },
  { // florencia rodriguez
    pacienteId: pacientes[5]._id,
    titulo: "Control de Vitamina D",
    prestadorId: prestadores[6]._id, // Dr. Hernan Carvajal
    prestador: prestadores[6].nombre,
    notas: "Nivel adecuado",
    fecha: new Date("2024-03-10")
  },
  // Paciente 6 (mariel arrigada)
  {
    pacienteId: pacientes[6]._id, 
    titulo: "Control post-operatorio",
    prestadorId: prestadores[11]._id, 
    prestador: prestadores[11].nombre,
    notas: "Buena evolución de la cirugía.",
    fecha: new Date("2024-11-05"),
  },
  { // mariel arrigada
    pacienteId: pacientes[6]._id,
    titulo: "Control Dental",
    prestadorId: prestadores[3]._id, // Dr. Hernan Gutierrrez
    prestador: prestadores[3].nombre,
    notas: "Revisión sin problemas",
    fecha: new Date("2024-02-20")
  },
  // Paciente 8 (Alejandro)
  {
    pacienteId: pacientes[7]._id, 
    titulo: "Exámenes de rutina",
    prestadorId: prestadores[9]._id, 
    prestador: prestadores[9].nombre,
    notas: "Pendiente resultados de laboratorio.",
    fecha: new Date("2024-11-04"),
  },
  {
    pacienteId: pacientes[7]._id,
    titulo: "Control oftalmológico anual",
    prestadorId: prestadores[7]._id, 
    prestador: prestadores[7].nombre,
    notas: "Vista en rango normal.",
    fecha: new Date("2024-11-09"),
  },
  // Paciente 9 (Vero)
  {
    pacienteId: pacientes[8]._id,
    titulo: "Consulta Ginecológica",
    prestadorId: prestadores[13]._id, // Dra. pesoa
    prestador: prestadores[13].nombre,
    notas: "Control anual, todo bien",
    fecha: new Date("2023-07-20")
  },
  {
    pacienteId: pacientes[8]._id,
    titulo: "Control de Vitamina D",
    prestadorId: prestadores[3]._id, // Dr. Hernan Gutierrrez
    prestador: prestadores[3].nombre,
    notas: "Nivel adecuado",
    fecha: new Date("2024-03-05")
  },
  // Paciente 10 (Martin)
  {
    pacienteId: pacientes[9]._id,
    titulo: "Consulta Pediátrica",
    prestadorId: prestadores[4]._id, // Dra. Laura Pérez
    prestador: prestadores[4].nombre,
    notas: "Vacunas al día, crecimiento normal",
    fecha: new Date("2023-08-12")
  },
  {
    pacienteId: pacientes[9]._id,
    titulo: "Control Dental",
    prestadorId: prestadores[3]._id, // Dr. Hernan Gutierrrez
    prestador: prestadores[3].nombre,
    notas: "Revisión sin problemas",
    fecha: new Date("2024-02-18")
  },
  // Paciente 11 (Cami)
  {
    pacienteId: pacientes[10]._id,
    titulo: "Consulta Pediátrica",
    prestadorId: prestadores[4]._id, // Dra. Laura Pérez
    prestador: prestadores[4].nombre,
    notas: "Revisión de desarrollo",
    fecha: new Date("2023-09-10")
  },
  {
    pacienteId: pacientes[10]._id,
    titulo: "Control Oftalmológico",
    prestadorId: prestadores[3]._id, // Dr. Hernan Gutierrrez
    prestador: prestadores[3].nombre,
    notas: "Vista en rango normal",
    fecha: new Date("2024-04-22")
  }
];
    try {
        await HistoriaClinica.deleteMany({});
        const historiasInsertadas = await HistoriaClinica.insertMany(historias);
      // actualizo paciente para agregar referencia a la historia
        await Promise.all(historiasInsertadas.map(async (historia) => {
            await Paciente.findByIdAndUpdate(
              historia.pacienteId,
              { $push: { historialClinico: historia._id } }
            );
        }));      
/*         for (const historia of historiasInsertadas) {
            await Paciente.findByIdAndUpdate(
              historia.pacienteId,
              { $push: { historialClinico: historia._id } }
            );
        } */
        console.log("Historias clínicas insertadas y vinculadas correctamente");
    } catch (error) {
        console.log('Error al insertar las historias:', error.message);
    }
}

module.exports = { seedHistoriasClinicas };

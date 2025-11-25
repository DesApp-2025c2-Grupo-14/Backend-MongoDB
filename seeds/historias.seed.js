const HistoriaClinica = require('../models/historialClinico');
const Paciente = require('../models/paciente');
const Prestador = require('../models/prestador');

async function seedHistoriasClinicas() {

    const pacientes = await Paciente.find();
    const prestadores = await Prestador.find();

const historias = [
  // Paciente 0
  {
    pacienteId: pacientes[0]._id,
    titulo: "Consulta Cardiológica",
    prestadorId: prestadores[3]._id, // Dr. Hernan Gutierrrez
    prestador: prestadores[3].nombre,
    notas: "Presión arterial alta, recomendar dieta baja en sodio",
    fecha: new Date("2023-03-15")
  },
  // Paciente 2
  {
    pacienteId: pacientes[2]._id,
    titulo: "Consulta Pediátrica",
    prestadorId: prestadores[4]._id, // Dra. Laura Pérez
    prestador: prestadores[4].nombre,
    notas: "Control anual completo",
    fecha: new Date("2023-03-15")
  },
  {
    pacienteId: pacientes[2]._id,
    titulo: "Evaluación Neurológica",
    prestadorId: prestadores[5]._id, // Dr. Pablo Rodríguez
    prestador: prestadores[5].nombre,
    notas: "Paciente presenta cefaleas frecuentes, se recomienda estudio de resonancia magnética",
    fecha: new Date("2024-09-10")
  },
  // Paciente 1
  {
    pacienteId: pacientes[1]._id,
    titulo: "Control Obstétrico",
    prestadorId: prestadores[4]._id, // Dra. Laura Pérez
    prestador: prestadores[4].nombre,
    notas: "Embarazo sin complicaciones",
    fecha: new Date("2023-04-20")
  },
  {
    pacienteId: pacientes[1]._id,
    titulo: "Consulta General",
    prestadorId: prestadores[3]._id, // Dr. Hernan Gutierrrez
    prestador: prestadores[3].nombre,
    notas: "Se recomienda análisis de sangre",
    fecha: new Date("2023-05-10")
  },
  // Paciente 3
  {
    pacienteId: pacientes[3]._id,
    titulo: "Chequeo Cardiológico",
    prestadorId: prestadores[5]._id, // Dr. Pablo Rodríguez
    prestador: prestadores[5].nombre,
    notas: "Se recomienda electrocardiograma",
    fecha: new Date("2025-08-10")
  },
  // Paciente 4 (Fede)
  {
    pacienteId: pacientes[4]._id,
    titulo: "Chequeo Cardiológico",
    prestadorId: prestadores[3]._id, // Dr. Hernan Gutierrrez
    prestador: prestadores[3].nombre,
    notas: "Presión arterial normal, todo bien",
    fecha: new Date("2023-05-10")
  },
  {
    pacienteId: pacientes[4]._id,
    titulo: "Control de Colesterol",
    prestadorId: prestadores[5]._id, // Dr. Pablo Rodríguez
    prestador: prestadores[5].nombre,
    notas: "Niveles dentro del rango recomendado",
    fecha: new Date("2024-01-15")
  },
  // Paciente 5 (Carolina)
  {
    pacienteId: pacientes[5]._id,
    titulo: "Consulta Ginecológica",
    prestadorId: prestadores[4]._id, // Dra. Laura Pérez
    prestador: prestadores[4].nombre,
    notas: "Control anual, sin novedades",
    fecha: new Date("2023-06-20")
  },
  {
    pacienteId: pacientes[5]._id,
    titulo: "Control de Vitamina D",
    prestadorId: prestadores[3]._id, // Dr. Hernan Gutierrrez
    prestador: prestadores[3].nombre,
    notas: "Nivel adecuado",
    fecha: new Date("2024-03-10")
  },
  // Paciente 6 (Lucas)
  {
    pacienteId: pacientes[6]._id,
    titulo: "Consulta Pediátrica",
    prestadorId: prestadores[4]._id, // Dra. Laura Pérez
    prestador: prestadores[4].nombre,
    notas: "Vacunas al día, desarrollo normal",
    fecha: new Date("2023-08-05")
  },
  {
    pacienteId: pacientes[6]._id,
    titulo: "Control Dental",
    prestadorId: prestadores[3]._id, // Dr. Hernan Gutierrrez
    prestador: prestadores[3].nombre,
    notas: "Revisión sin problemas",
    fecha: new Date("2024-02-20")
  },
  // Paciente 8 (Alejandro)
  {
    pacienteId: pacientes[8]._id,
    titulo: "Chequeo General",
    prestadorId: prestadores[3]._id, // Dr. Hernan Gutierrrez
    prestador: prestadores[3].nombre,
    notas: "Todo normal, sin complicaciones",
    fecha: new Date("2023-06-15")
  },
  {
    pacienteId: pacientes[8]._id,
    titulo: "Control Cardiológico",
    prestadorId: prestadores[5]._id, // Dr. Pablo Rodríguez
    prestador: prestadores[5].nombre,
    notas: "Presión arterial estable",
    fecha: new Date("2024-01-10")
  },
  // Paciente 9 (Vero)
  {
    pacienteId: pacientes[9]._id,
    titulo: "Consulta Ginecológica",
    prestadorId: prestadores[5]._id, // Dr. Pablo Rodríguez
    prestador: prestadores[5].nombre,
    notas: "Control anual, todo bien",
    fecha: new Date("2023-07-20")
  },
  {
    pacienteId: pacientes[9]._id,
    titulo: "Control de Vitamina D",
    prestadorId: prestadores[3]._id, // Dr. Hernan Gutierrrez
    prestador: prestadores[3].nombre,
    notas: "Nivel adecuado",
    fecha: new Date("2024-03-05")
  },
  // Paciente 10 (Martin)
  {
    pacienteId: pacientes[10]._id,
    titulo: "Consulta Pediátrica",
    prestadorId: prestadores[4]._id, // Dra. Laura Pérez
    prestador: prestadores[4].nombre,
    notas: "Vacunas al día, crecimiento normal",
    fecha: new Date("2023-08-12")
  },
  {
    pacienteId: pacientes[10]._id,
    titulo: "Control Dental",
    prestadorId: prestadores[3]._id, // Dr. Hernan Gutierrrez
    prestador: prestadores[3].nombre,
    notas: "Revisión sin problemas",
    fecha: new Date("2024-02-18")
  },
  // Paciente 11 (Cami)
  {
    pacienteId: pacientes[11]._id,
    titulo: "Consulta Pediátrica",
    prestadorId: prestadores[4]._id, // Dra. Laura Pérez
    prestador: prestadores[4].nombre,
    notas: "Revisión de desarrollo",
    fecha: new Date("2023-09-10")
  },
  {
    pacienteId: pacientes[11]._id,
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

const HistoriaClinica = require('../models/historialClinico');
const Paciente = require('../models/paciente');

async function seedHistoriasClinicas() {

    const pacientes = await Paciente.find();

    const historias = [
      {
        pacienteId: pacientes[0]._id,
        titulo: "Consulta Cardiológica",
        prestador: "Dr. Zed",
        notas: "Presión arterial alta, recomendar dieta baja en sodio",
        fecha: new Date("2023-03-15")
      },
      {
        pacienteId: pacientes[2]._id,
        titulo: "Consulta Pediátrica",
        prestador: "Dr. Pliskin",
        notas: "Control anual completo",
        fecha: new Date("2023-03-15")
      },
      {
        pacienteId: pacientes[2]._id,
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
        pacienteId: pacientes[1]._id,
        titulo: "Consulta General",
        prestador: "Dr. Fernández",
        notas: "Se recomienda análisis de sangre",
        fecha: new Date("2023-05-10")
      },
      {
        pacienteId: pacientes[3]._id,
        titulo: "Chequeo Cardiológico",
        prestador: "Dr. Frattini",
        notas: "Se recomienda electrocardiograma",
        fecha: new Date("2025-08-10")
      },      
      // fede
      {
        pacienteId: pacientes[4]._id,
        titulo: "Chequeo Cardiológico",
        prestador: "Dr. Zed",
        notas: "Presión arterial normal, todo bien",
        fecha: new Date("2023-05-10")
      },
      {
        pacienteId: pacientes[4]._id,
        titulo: "Control de Colesterol",
        prestador: "Dra. Martínez",
        notas: "Niveles dentro del rango recomendado",
        fecha: new Date("2024-01-15")
      },
      // Carolina 
      {
        pacienteId: pacientes[5]._id,
        titulo: "Consulta Ginecológica",
        prestador: "Dra. Laura Pérez",
        notas: "Control anual, sin novedades",
        fecha: new Date("2023-06-20")
      },
      {
        pacienteId: pacientes[5]._id,
        titulo: "Control de Vitamina D",
        prestador: "Dr. López",
        notas: "Nivel adecuado",
        fecha: new Date("2024-03-10")
      },
      // Lucas 
      {
        pacienteId: pacientes[6]._id,
        titulo: "Consulta Pediátrica",
        prestador: "Dra. Fernández",
        notas: "Vacunas al día, desarrollo normal",
        fecha: new Date("2023-08-05")
      },
      {
        pacienteId: pacientes[6]._id,
        titulo: "Control Dental",
        prestador: "Dr. Zed",
        notas: "Revisión sin problemas",
        fecha: new Date("2024-02-20")
      },      
        // Alejandro 
      {
        pacienteId: pacientes[8]._id,
        titulo: "Chequeo General",
        prestador: "Dr. López",
        notas: "Todo normal, sin complicaciones",
        fecha: new Date("2023-06-15")
      },
      {
        pacienteId: pacientes[8]._id,
        titulo: "Control Cardiológico",
        prestador: "Dra. Fernández",
        notas: "Presión arterial estable",
        fecha: new Date("2024-01-10")
      },
      // Vero
      {
        pacienteId: pacientes[9]._id,
        titulo: "Consulta Ginecológica",
        prestador: "Dra. Martínez",
        notas: "Control anual, todo bien",
        fecha: new Date("2023-07-20")
      },
      {
        pacienteId: pacientes[9]._id,
        titulo: "Control de Vitamina D",
        prestador: "Dr. Zed",
        notas: "Nivel adecuado",
        fecha: new Date("2024-03-05")
      },
      // Martin
      {
        pacienteId: pacientes[10]._id,
        titulo: "Consulta Pediátrica",
        prestador: "Dra. Laura Pérez",
        notas: "Vacunas al día, crecimiento normal",
        fecha: new Date("2023-08-12")
      },
      {
        pacienteId: pacientes[10]._id,
        titulo: "Control Dental",
        prestador: "Dr. Fernández",
        notas: "Revisión sin problemas",
        fecha: new Date("2024-02-18")
      },
      // Cami
      {
        pacienteId: pacientes[11]._id,
        titulo: "Consulta Pediátrica",
        prestador: "Dra. Laura Pérez",
        notas: "Revisión de desarrollo",
        fecha: new Date("2023-09-10")
      },
      {
        pacienteId: pacientes[11]._id,
        titulo: "Control Oftalmológico",
        prestador: "Dr. López",
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
              { $push: { historiasClinicas: historia._id } }
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

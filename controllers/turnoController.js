const Turno = require('../models/turno');
const Prestador = require ("../models/prestador")

const obtenerTurnos = async (req, res) => {  
  try {
    const { prestador } = req.query;
    let query = {};  
    if (prestador) {
      const datosPrestador = await Prestador.findById(prestador);  
      if (!datosPrestador) {
        return res.status(404).json({ message: "Prestador no encontrado" });
      }  
      // si el prestador no es centro medico, va a buscar su especialidad
      if (!datosPrestador.centroMedico) {
        query.prestadorId  = prestador;
      } else {
        // si es centro medico, va a buscar los prestadores que trabajan ahi
        const integrantes = await Prestador.find({
          integraCM: true,
          centroMedicoId: prestador
        });
        if (integrantes.length === 0) {
          return res
            .status(404)
            .json({ message: "El centro médico no tiene prestadores asignados." });
        }   
        // busca las especialidades de los que trabajan en el centro medico
        const idsIntegrantes = integrantes
          .map(p => p._id)
         
        // Filtra turnos que tengan cualquiera de esas especialidades
        query.prestadorId  = { $in: idsIntegrantes };
      }
      const turnos = await Turno.find(query)
      .populate("pacienteId","nombre apellido dni")
      .populate("prestadorId", "nombre apellido especialidad centroMedico");
      if (!turnos || turnos.length === 0) {
        return res.status(404).json({ message: "No se encontraron turnos" });
    }
    res.status(200).json(turnos);
    }  
  } catch (error) {
    console.error("Error al obtener turnos:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

const turnosPorEspecialidad = async (req, res) => {
  try {
    const { especialidad } = req.body;

    if (!especialidad) {
      return res.status(400).json({ message: "Debe enviar una especialidad en el body." });
    }

    const turnos = await Turno.aggregate([
      { $match: { especialidad: especialidad }},

      { $lookup:{
        from: "pacientes",
        localField: "pacienteId",
        foreignField: "_id",
        as:"paciente"
      }},
      { $unwind:"$paciente"},

      {$lookup:{
        from : "prestadores",
        localField: "prestadorId",
        foreignField: "_id",
        as:"prestador"
      }},
      { $unwind:"$prestador"},

      { $project: {
          _id: 1,
          especialidad: 1,
          fechaHora: 1,

          pacienteId: {
            _id: "$paciente._id",
           nombre: "$paciente.nombre",
           apellido: "$paciente.apellido",
          },

          prestadorId: {
            _id: "$prestador._id",
            nombre: "$prestador.nombre"
          }
       },
      }
    ]);
    
    if (!turnos || turnos.length === 0) {
      return res.status(404).json({ message: 'No se encontraron turnos para esta especialidad.' });
    }

    return res.status(200).json(turnos);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error interno del servidor.' });
  }
};

module.exports = {
  obtenerTurnos,
  turnosPorEspecialidad
}
const Turno = require('../models/turno');

const obtenerTurnos = async (req, res) => {
  try {
     const { fecha } = req.query;
     const query = fecha ? { dia: fecha } : {};

    const turnos = await Turno.find(query).populate('pacienteId',"nombre apellido dni ");;

    if (!turnos) {
      return res.status(404).json({ message: 'Turnos no encontrado' });
    }
    if ( turnos.length === 0) {
      return res.status(404).json({ message: 'No se encontraron turnos' });
    }

    res.status(200).json(turnos);
  } catch (error) {
    console.error('Error al obtener turnos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
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
      { $project: {
        _id: 1,
        especialidad: 1,
        fechaHora: 1,
        paciente: {
          nombre: 1,
          apellido: 1,
        },
      }
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
const Turno = require('../models/turno');

const obtenerTurnos = async (req, res) => {
  try {
     const { fecha } = req.query;
     const query = fecha ? { dia: fecha } : {};
    //busca turnos en base
    const turnos = await Turno.find(query).populate('pacienteId',"nombre apellido dni");;
    //error si no lo encuentra
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

module.exports = {obtenerTurnos}
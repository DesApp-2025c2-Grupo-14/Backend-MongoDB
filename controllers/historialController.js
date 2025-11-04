
const HistorialClinico = require('../models/historialClinico');
const Paciente = require('../models/paciente');

/* const obtenerHistoriasClinicasPorPaciente = async (req, res) => {
  try {
    const nroAfiliado = req.params.nAfiliado
    const paciente = await Paciente.findOne({ nroAfiliado: nroAfiliado }).select('nombre -_id').populate('historiasClinicas', 'nombre')
    res.status(200).json(paciente)
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Error al obtener el historial' })
  }
}
 */


const obtenerHistorialClinico = async (req, res) => {
  const { id } = req.params; 
  const { prestador } = req.query;

  try {
    //buscar paciente en base
    const paciente = await Paciente.findOne({ _id: id });
    //error si no lo encuentra
    if (!paciente) {
      return res.status(404).json({ message: 'Paciente no encontrado' });
    }
    //filtro base para traer solo las del paciente
    const filtro = { pacienteId: paciente._id };

    //agrego el filtro para el prestador
    if (prestador) {
      filtro.prestador = prestador;
    }
    //busca la coleccion de historias con el filtro ademas deja fuera el campo de versiones de mongo
    const historial = await HistorialClinico.find(filtro).select('-__v');

    if (!historial || historial.length === 0) {
      return res.status(404).json({ message: 'No se encontraron historias clínicas' });
    }

    res.status(200).json({
      nombrePaciente: `${paciente.nombre} ${paciente.apellido}`,
      historial
    });
  } catch (error) {
    console.error('Error al obtener historial clínico:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};


module.exports = {
  obtenerHistorialClinico
};

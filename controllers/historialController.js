
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
  const  id  = req.params.id; // ahora usamos el id de Mongo
  const { prestador } = req.query;

  try {
    // Buscar paciente por _id
    const paciente = await Paciente.findById(id);

    // Error si no lo encuentra
    if (!paciente) {
      return res.status(404).json({ message: 'Paciente no encontrado' });
    }

    // Filtro para traer solo las historias del paciente
    const filtro = { pacienteId: paciente._id };

    // Agregar filtro para el prestador si se pasó por query
    if (prestador) {
      filtro.prestador = prestador;
    }

    // Buscar en la colección de Historias Clínicas
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

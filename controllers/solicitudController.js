const Solicitud = require ("../models/solicitud")

const obtenerSolicitudesPendientes = async (req,res) => {
  try {
    const estado = req.params.estado;
    const solicitudes = Solicitud.find().select('titulo tipo descripcion estado');
    const solicitudesPendientes = solicitudes.filter(comment => comment.estado === estado);
    if (!solicitudesPendientes) {
      return res.status(404).json({ message: 'Solicitudes no encontradas' })
    }
    res.status(200).json(solicitudesPendientes)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' })
  }
  
}

module.exports = {obtenerSolicitudesPendientes}
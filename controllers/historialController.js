
const HistorialClinico = require('../models/historialClinico');
const Paciente = require('../models/paciente');
const Prestador = require('../models/prestador');
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



/* const obtenerHistorialClinico = async (req, res) => {
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
};  */



const obtenerHistorialClinico = async (req, res) => {
  const { id } = req.params; 
  const { prestadorId, desde, hasta} = req.query;

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
    if (prestadorId) {
      const prestador = await Prestador.findById(prestadorId);

      if (!prestador) {
        return res.status(404).json({ message: 'Prestador no encontrado' });
      }

      if (prestador.centroMedico) {
        // si soy centro medico busco a todos los prestadores
        const prestadoresCM = await Prestador.find({ centroMedicoId: prestador._id })
          .select('_id');

        const idsPrestadores = prestadoresCM.map(p => p._id);

        filtro.prestadorId = { $in: idsPrestadores };
      } else {
        // si es prestador solo
        filtro.prestadorId = prestadorId;
      }
    }
    // agrego filtro de fechas si vienen en la consulta puede venir una o ambas
    if (desde || hasta) {
      filtro.fecha = {};
      if (desde) filtro.fecha.$gte = new Date(desde);
      if (hasta) filtro.fecha.$lte = new Date(hasta);
    }
    
    //busca la coleccion de historias con el filtro ademas deja fuera el campo de versiones de mongo
    const historial = await HistorialClinico.find(filtro).select('-__v').sort({ fecha: -1 });

    if (!historial || historial.length === 0) {
      return res.status(200).json({
        nombrePaciente: `${paciente.nombre} ${paciente.apellido}`,
        historial: [],
        mensaje: 'No se encontraron historias clínicas para los criterios seleccionados'
      });
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

const crearHistoria = async (req, res) => {
  const { titulo, prestadorId, notas, fecha } = req.body;
  const {id} = req.params;
  
  try {
    const paciente = await Paciente.findById(id);
    if (!paciente) {
      return res.status(404).json({ error: "Paciente no encontrado" });
    }
    const prestador = await Prestador.findById(prestadorId);
    if (!prestador) {
      return res.status(404).json({ error: "Prestador no encontrado" });
    }
    const nuevaHistoria = new HistorialClinico({
      pacienteId: id,
      titulo,
      prestadorId,
      prestador: prestador.nombre,
      notas,
      fecha
    })
    await nuevaHistoria.save()
    // actualizar el paciente para agregar la referencia a la nueva situacion 
    await Paciente.findByIdAndUpdate(id,{ $push: { historialClinico: nuevaHistoria._id } },{ new: true });

    res.status(201).json({message:"La historia clinica fue creada correctamente", historia:nuevaHistoria});
  } catch (error) {
    console.error("Error al crear nueva historia:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = {
  obtenerHistorialClinico,
  crearHistoria
};

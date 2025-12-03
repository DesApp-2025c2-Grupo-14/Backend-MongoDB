const Paciente = require ("../models/paciente")
const situacionTerapeutica = require('../models/situacionTerapeutica')

const obtenerSituacionTerapeutica = async (req, res) => {
  const { id } = req.params; 
  const { desde, hasta} = req.query;
  try {
    //buscar paciente en base
    const paciente = await Paciente.findOne({ _id: id });
    //error si no lo encuentra
    if (!paciente) {
      return res.status(404).json({ message: 'Paciente no encontrado' });
    }

    let filtro = { pacienteId: paciente._id, activa: true };
    // agrego filtro de fechas si vienen en la consulta puede venir una o ambas
    if (desde || hasta) {
      filtro.fechaInicio = {};
      if (desde) filtro.fechaInicio.$gte = new Date(desde);
      if (hasta) filtro.fechaInicio.$lte = new Date(hasta);
    }

    //busca las situaciones que hagan match con el _id y que esten activas de paciente ademas de poder agregar las fechas y se queda con todas las del paciente 
    const situaciones = await situacionTerapeutica.find(filtro).select('-__v').sort({ fechaInicio: -1 });

    if ( situaciones.length === 0) {
      return res.status(200).json({
        nombrePaciente: `${paciente.nombre} ${paciente.apellido}`,
        situaciones: [],
        mensaje: 'No se encontraron situaciones terapeuticas para los criterios seleccionados'
      });
    }

    res.status(200).json({
      nombrePaciente: `${paciente.nombre} ${paciente.apellido}`,
      situaciones
    });
  } catch (error) {
    console.error('Error al obtener situaciones:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};


const crearNuevaSituacionTerapeutica = async (req, res) => {
  const { titulo, fechaInicio, fechaFinal, descripcion } = req.body;
  const {id} = req.params;
  
  try {
    const nuevaSituacion = new situacionTerapeutica({
      pacienteId: id,
      titulo,
      descripcion,
      fechaInicio,
      fechaFinal: fechaFinal || null // esta es opcional
    })
    await nuevaSituacion.save()
    // actualizar el paciente para agregar la referencia a la nueva situacion 
    await Paciente.findByIdAndUpdate(id,{ $push: { situacionesTerapeuticas: nuevaSituacion._id } },{ new: true });

    res.status(201).json({message:"La situación terapéutica fue creada correctamente", situacion:nuevaSituacion});
  } catch (error) {
    console.error("Error al crear nueva situación:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// aca valido la fecha con el middleware por eso es mas corto
const modificarFechaFinalizacion = async (req, res) => {
  const { fechaFinal } = req.body;

  try {
    const situacion = req.situacion;

    situacion.fechaFinal = fechaFinal;
    await situacion.save();

    res.status(200).json(situacion);
  } catch (error) {
    console.error("Error al modificar la fecha de finalización:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};



const eliminarSituacion = async (req, res) => {
  const {id} = req.params  
  try {
        const situacionEliminada = await situacionTerapeutica.findByIdAndUpdate(id, { activa: false }, { new: true })
        if (!situacionEliminada) {
          return res.status(404).json({ message: "Situación terapéutica no existe" });
        }
        
        res.status(200).json({ message: "Situación terapéutica fue borrada correctamente" });

    } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar la situacion terapeutica' });
}

}  


module.exports = {
  eliminarSituacion,
  modificarFechaFinalizacion,
  crearNuevaSituacionTerapeutica,
  obtenerSituacionTerapeutica,
  
}
const Paciente = require ("../models/paciente")
const situacionTerapeutica = require('../models/situacionTerapeutica')

/* const crearNuevaSituacionTerapeutica = async (req, res) => {
  try {
    const nroAfiliado = req.params.nAfiliado
    const { titulo,fechaInicio,fechaFinal,descripcion,} = req.body
    const paciente = await Paciente.findOne({ nroAfiliado: nroAfiliado })
    const pacienteId = paciente._id.toString()
    const nuevaSituacion = new SituacionTerapeutica({
      titulo: titulo,
      fechaInicio: fechaInicio,
      fechaFinal: fechaFinal,
      descripcion: descripcion,
      paciente: pacienteId
    })
    await nuevaSituacion.save()
    res.status(201).json(j)
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error al crear la publicación' })
  }
} */
/* const obtenerSituacionTerapeutica = async (req, res) => {
  try {
    const nroAfiliado = req.params.nAfiliado
    const paciente = await Paciente.findOne({ nroAfiliado: nroAfiliado }).select('nombre -_id').populate('situacionesTerapeuticas', 'titulo')
    res.status(200).json(paciente)
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Error al obtener las situaciones terapeuticas' })
  }
}
 */

const obtenerSituacionTerapeutica = async (req, res) => {
  const { nAfiliado } = req.params; 

  try {
    //buscar paciente en base
    const paciente = await Paciente.findOne({ nroAfiliado: nAfiliado });
    //error si no lo encuentra
    if (!paciente) {
      return res.status(404).json({ message: 'Paciente no encontrado' });
    }
    
    //busca las situaciones que hagan match con el _id y que esten activas de paciente y se queda con todas las del paciente 
    const situaciones = await situacionTerapeutica.find({pacienteId: paciente._id, activa: true}).select('-__v');

    if ( situaciones.length === 0) {
      return res.status(404).json({ message: 'No se encontraron situaciones terapeuticas' });
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

/*  const modificarFechaFinalizacion = async (req, res) => {
    const id = req.params.id
    const {titulo,fechaInicio,fechaFinal,descripcion} = req.body
    try {
        const situacionModificada = await SituacionTerapeutica.findByIdAndUpdate(id,{
            $set: {
              titulo:titulo,
              fechaInicio:fechaInicio,              
              fechaFinal: fechaFinal,
              descripcion:descripcion
            }
        },{
            new: true,
            runValidators: true
        })
        res.status(200).json(situacionModificada)
    } catch (error) {
        console.error(error);
        res.status(400).json({error: 'Error al modificar fecha de finalizacion'})
    }
} */
 



module.exports = {
  eliminarSituacion,
  modificarFechaFinalizacion,
  crearNuevaSituacionTerapeutica,
  obtenerSituacionTerapeutica,
  
}